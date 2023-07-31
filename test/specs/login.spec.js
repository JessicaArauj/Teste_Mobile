const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");

let urlStore = 'http://lojaebac.ebaconline.art.br/'
let user = 'gerente'
let pass = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Access Admin Panel', () => {
    it('shoud login with valid credentials', async() => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlStore)
        await loginScreen.continue()
        // await loginScreen.login(user, pass)
        // await loginScreen.goToTwoFactorAuth()
        // await loginScreen.twoFactorLogin(pass)

        // expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        // expect(await myStoreScreen.getStoreName()).toEqual('EBAC - SHOP')
    });

    
});