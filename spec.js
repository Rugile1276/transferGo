var obj = require('./object.js');
var d = require('./data.js');
var using = require('jasmine-data-provider');

beforeEach(function () {
    obj.getURL();
})


describe('Elements should be visible on page', function(){

    it('title', function(){
        expect(obj.titleElem.getText()).toBe(obj.expectedTitle);
    });

    it('input field', function(){
        expect(obj.inputField.isPresent()).toBe(true);
    });

    it('send button', function(){
        expect(obj.submitBtn.isPresent()).toBe(true);
    });
});

describe('Factorial gives correct result', function(){

    it('on 20 request in a row', function(){

        using(d.DataDriven, function (data, description) {

            var num = data.num;
            var fac = obj.factorial(num);
            var textToWait = obj.getResultText(num);
            var expectedText = obj.getExpectedText(num, fac);

            obj.inputField.sendKeys(num);
            obj.submitBtn.click().then(function () {
                browser.wait(obj.EC.textToBePresentInElement(obj.resultElem, textToWait), 5000);
            })
            expect(obj.resultElem.getText()).toBe(expectedText);
            obj.inputField.clear();

        });
    });
});

describe('Error should appear when', function(){

    it('entering non integer', function(){

        var notNumber = obj.getRandomNotANum();
        var textToWait = obj.getResultText(notNumber);
        var expectedText = obj.getExpectedText(notNumber);

        obj.inputField.sendKeys(notNumber);
        obj.submitBtn.click().then(function () {
            browser.wait(obj.EC.textToBePresentInElement(obj.resultElem, textToWait), 5000);
        })
        expect(obj.resultElem.getText()).toBe(expectedText);
    });

    it('clicking submit without entering any value', function(){

        var notNumber = obj.getRandomNotANum();
        var textToWait = obj.getResultText(notNumber);
        var expectedText = obj.getExpectedText(notNumber);

        obj.inputField.sendKeys(notNumber);
        obj.submitBtn.click().then(function () {
            browser.wait(obj.EC.textToBePresentInElement(obj.resultElem, textToWait), 5000);
        })
        expect(obj.resultElem.getText()).toBe(expectedText);
    });

    //[BUG] NOTHING (NOR ERR NOR RESULT) IS SHOWN WHEN ENTERING MORE THAN 171
    it('entering more than 170', function(){
        var num = 171;
        //SHOUD BE CHANGED
        var textToWait = '';
        var expectedText = '';

        obj.inputField.sendKeys(num);
        obj.submitBtn.click().then(function () {
            browser.wait(obj.EC.textToBePresentInElement(obj.resultElem, textToWait), 5000);
        })
        expect(obj.resultElem.getText()).toBe(expectedText);
    });
});

describe('When error appears', function(){
    it('input field border becomes red', function(){

        obj.inputField.sendKeys(obj.getRandomNotANum());
        obj.submitBtn.click();

        expect(obj.inputField.getAttribute("style")).toContain("red");
    });

    it('error text is red', function(){

        obj.inputField.sendKeys(obj.getRandomNotANum());
        obj.submitBtn.click();

        expect(obj.resultElem.getAttribute("style")).toContain("rgb(255");
    });
});

describe('Links opens correctly for', function(){

    it('terms and conditions', function(){
        obj.termsAndCondElem.click();
        expect(browser.getCurrentUrl()).toBe(obj.expectedTermsUrl);
    });

    it('privacy', function(){
        obj.privacyElem.click();
        expect(browser.getCurrentUrl()).toBe(obj.expectedPrivacyUrl);
    });
});


