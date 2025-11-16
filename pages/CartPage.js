class CartPage {
  constructor(page) {
    this.page = page;
    this.productName = '[data-test="inventory-item-name"]';
  }

  async getProductName() {
    return await this.page.locator(this.productName).innerText();
  }
}

module.exports = CartPage;
