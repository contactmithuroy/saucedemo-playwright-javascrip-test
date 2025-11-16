class InventoryPage {
  constructor(page) {
    this.page = page;
    this.backpackAddBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.cartIcon = '[data-test="shopping-cart-link"]';
  }

  async addBackpack() {
    await this.page.click(this.backpackAddBtn);
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = InventoryPage;
