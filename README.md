# SauceDemo Automation with Playwright and JavaScript
Automated Playwright test that **logs in**, **adds one product to the cart**, v**erifies product name in cart**, and **logs out**. Using Playwright, Javascript and POM Structure.
```bash
1. Opens https://www.saucedemo.com/
2. Logs in as standard_user
3. Adds "Sauce Labs Backpack" to cart
4. Verifies product name in cart
5. Logs out 
```

## Prerequisites
2. `npm install`
3. `npx playwright install`

## Setup
```bash
# 1. Clone the repo and setup
git clone https://github.com/contactmithuroy/saucedemo-playwright-javascrip-test.git
cd saucedemo-playwright-javascrip-test
```
## Run Prerequisites
```bash
npm install
npx playwright install
```
## Run Test Case in Headless Mode
```bash
npx playwright test
```
## Run Test Case in Visual Mode
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
## Output
<img width="1065" height="263" alt="Screenshot from 2025-11-16 14-40-40" src="https://github.com/user-attachments/assets/17d3c4dd-d087-44e6-9373-a993f88aa98b" />
