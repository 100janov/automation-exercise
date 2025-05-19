import { test, expect } from '@playwright/test';
import { HomePage } from "../src/pages/homePage";


test('initial test', async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto('https://www.automationexercise.com/');

  await homePage.goToLoginSignUpPage();

  await expect(page).toHaveURL(/\/login/);

});

