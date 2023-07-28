const {join} = require('path')

exports.config = {
    hostname: '127.0.0.1', // ip local
    port: 4723,
    path: '/wd/hub',
    waitForTimeout: 20000,
    specs: [
        './test/specs/**/*spec.js'
    ],
    framework: 'mocha',
    capabilities:[{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/loja-ebac.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
        "appActivity": ".ui.main.MainActivity", 
        "appPackage": "com.woocommerce.android"
    }],
    mochaOpts: {
        timeout: 300000
    },
}