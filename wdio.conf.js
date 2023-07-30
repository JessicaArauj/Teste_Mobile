const { join } = require('path')
// const allure = require('allure-commandline')
// const video = require('wdio-video-reporter');

exports.config = {
    hostname: '127.0.0.1', // ip local
    port: 4723,
    path: '/wd/hub',
    waitForTimeout: 100000,
    specs: [
        './test/specs/**/*spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/loja-ebac.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
        // "appActivity": ".ui.main.MainActivity", 
        // "appPackage": "com.woocommerce.android"
    }],
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    // reporters: ['spec',
    //     [video, {
    //         saveAllVideos: true,       // If true, also saves videos for successful test cases
    //         videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
    //     }],
    //     ['allure', {
    //         outputDir: 'allure-results',
    //         disableWebdriverStepsReporting: true,
    //         disableWebdriverScreenshotsReporting: true,
    //     }],
    // ],
    // onComplete: function () {
    //     const reportError = new Error('Could not generate Allure report')
    //     const generation = allure(['generate', 'allure-results', '--clean'])
    //     return new Promise((resolve, reject) => {
    //         const generationTimeout = setTimeout(
    //             () => reject(reportError),
    //             5000)

    //         generation.on('exit', function (exitCode) {
    //             clearTimeout(generationTimeout)

    //             if (exitCode !== 0) {
    //                 return reject(reportError)
    //             }

    //             console.log('Allure report successfully generated')
    //             resolve()
    //         })
    //     })
    // },
    // afterStep: async function (step, scenario, { error, duration, passed }, context) {
    //     driver.takeScreenshot();
    // }
}