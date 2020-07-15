function object () {

    this.EC = protractor.ExpectedConditions;

    this.inputField = element(by.id("number"));
    this.submitBtn = element(by.id("getFactorial"));
    this.resultElem = element(by.id("resultDiv"));
    this.titleElem = element(by.tagName("h1"));
    this.termsAndCondElem = element(by.partialLinkText("Terms"));
    this.privacyElem = element(by.partialLinkText("Privacy"));

    this.expectedTitle = "The greatest factorial calculator!";
    this.expectedTermsUrl = "https://qa-test-app.transfergo.rocks/index.php/terms";
    this.expectedPrivacyUrl = "https://qa-test-app.transfergo.rocks/index.php/privacy";

    this.getURL=function()
    {
        browser.get('https://qa-test-app.transfergo.rocks/index.php/');
    };

    this.factorial = function (x) {
        if (x < 0 ) return 0;
        if (x <= 1 ) return 1;
        return x * this.factorial(x-1);
    }

    this.getRandomNumber = function () {
        return Math.floor(Math.random() * 170);
    }

    this.getRandomNotANum = function () {
        return String.fromCharCode(Math.floor(Math.random() * (47 - 33 + 1) ) + 33);
    }

    this.getResultText = function (num) {
        if (Number(num) || num === 0){
            return 'factorial of ' + num;
        }else{
            return 'Please enter an integer';
        }
    }

    this.getExpectedText = function (num, fac) {
        if (Number(num) || num === 0){
            return "The factorial of " + num + " is: " + fac;
        }else{
            return 'Please enter an integer';
        }
    }
}
module.exports = new object();