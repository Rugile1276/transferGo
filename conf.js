exports.config = {
    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    specs: [
        'spec.js'
    ],
    onPrepare: function ()
    {
        const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
            }
        }));

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );

    }
};