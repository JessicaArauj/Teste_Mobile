class MyStoreScreen {
    get #myStoreLogo() { return $('~My store') }

    get #myStoreAdress() { return $('id:toolbar_subtitle') }

    async getStoreName() {
        // await this.#nameStore.waitForExist({ timeout: 50000 })
        return await this.#myStoreAdress.getText()
    }

   async myStoreLogoIsDisplayed() {
        await this.#myStoreLogo.waitForExist({ timeout: 50000 })
        return await this.#myStoreLogo.isDisplayed()
    }

//     get #storeProducts() { return $('id:products') }

//     async accessproducts() { await this.#storeProducts.click() }
}

module.exports = new MyStoreScreen()