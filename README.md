# SauceDemo Automation with Playwright and JavaScript
Automated Playwright test that logs in, adds one product to the cart, verifies product name in cart, and logs out.
**Login → Add to Cart → Verify → Logout** — Fully automated, **100% verified**, **ready to run**!

## What This Does (In 5 Seconds)

```bash
1. Opens https://www.saucedemo.com/
2. Logs in as standard_user
3. Adds "Sauce Labs Backpack" to cart
4. Verifies product name in cart
5. Logs out cleanly
```

## Prerequisites
2. `npm install`
3. `npx playwright install`

## Setup

```bash
# 1. Clone the repo and setup
git clone https://github.com/contactmithuroy/saucedemo-playwright-javascrip-test.git
cd saucedemo-playwright-javascrip-test
npm install
npx playwright install
```
## Run in Headless Mode
```bash
npx playwright test
```
## Run in Visual Mode
```bash
npm run test:visual
```

## View HTML Report
```bash
npx playwright show-report
```
## Expected Output
```bash
Running 1 test using 1 worker
  [Chromium] › sauce-demo.spec.js:3 › Login, add product, verify cart, logout
  1 passed (4.8s)
```
