# transferGo

Task - Test app is here: https://qa-test-app.transfergo.rocks/index.php/ The goal of the task - automate main functionality with selected tools and provide instructions how to launch test suite. Add any other necessary comments. If you have any questions please contact: edvardas.metlevskis@transfergo.com ​

It was done with protractor (js) and jasme framework, tools that I am working with in my current position.
Even though protractor is for angular applications, I adjusted it to needed app.
I disabled waiting for protractr app and somewhere added protractor waiting for expected conditions(when working with angular app it's not needed)

## Project setup

```
git clone https://github.com/Rugile1276/transferGo.git

//dependencies
npm install

webdriver-manager update

//run tests
npm run protractor

```

In /target folder you can find simple tests report