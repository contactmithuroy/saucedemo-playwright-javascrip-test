const { test, expect } = require('@playwright/test');

test('User logs in, adds product to cart, verifies name, and logs out', async ({ page }) => {
  // Step 1: Navigate and login with valid credentials
  await page.goto('/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await expect(page).toHaveURL('/inventory.html');

  // Step 2: Add first product to cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await expect(page.locator('[data-test="shopping-cart-link"]')).toContainText('1');

  // Step 3: Go to cart and verify product name
  await page.click('[data-test="shopping-cart-link"]');
  await expect(page).toHaveURL('/cart.html');
  const productName = page.locator('[data-test="inventory-item-name"]');
  await expect(productName).toHaveText('Sauce Labs Backpack');

  // Step 4: Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
  await expect(page).toHaveURL('/');
});