const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const MenuPage = require('../pages/MenuPage');

test('User logs in, adds product to cart, verifies name, and logs out', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const menu = new MenuPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('/inventory.html');

  await inventory.addBackpack();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toContainText('1');

  await inventory.openCart();
  await expect(page).toHaveURL('/cart.html');

  const name = await cart.getProductName();
  expect(name).toBe('Sauce Labs Backpack');

  await menu.logout();
  await expect(page).toHaveURL('/');
});
