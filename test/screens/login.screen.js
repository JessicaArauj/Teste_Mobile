class LoginScreen {
    get #storeAddress() { return $('android.widget.EditText') } // ok
    get #continue() { return $('id:bottom_button') } // ok
    // get #continueWithStoreCredentials () { return $('id:login_site_creds') }
    // get #continueWithStoreCredentials () { return $('~Continue with store credentials') }
    // get #username() { return $('android=new UiSelector().text("Username")') }
    // get #password() { return $('android=new UiSelector().text("Password")') }
    // get #twoFactorPasswordBtn() { return $('id:login_enter_password') }

    async setStoreAddress(url) {
       await this.#storeAddress.setValue(url) // ok
    }

    async continue() {
        await this.#continue.click() // ok
    }

    // async continue() {
    //     await this.#continueWithStoreCredentials.click()
    // }

    // async continue() {
    //     await this.#continueWithStoreCredentials.waitForVisible({ timeout: 5000 });
    //     await this.#continueWithStoreCredentials.click();
    // }
      
    // async login(username, password) {
    //     await this.#username.setValue(username)
    //     await this.#password.setValue(password)
    //     await this.#continue.click()
    // }

    // async goToTwoFactorAuth() {
    //     await this.#twoFactorPasswordBtn.click()

    // }

    // async twoFactorLogin(password) {
    //     await this.#password.setValue(password)
    //     await this.#continue.click()
    // }
}

module.exports = new LoginScreen()