import { test as base } from '@playwright/test';
import { Header } from '../pages/header';
import { LoginPage } from '../pages/loginPage';

type BaseFixtures = {
    header: Header;
    loginPage: LoginPage;

};

/**
 * This is the base test fixture that will be used in all tests.
 */
export const test = base.extend<BaseFixtures>({
    header: async ({ page }, use) => {
        await use(new Header(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
});

/**
 * This is beforeEach function that will be executed before each test.
 */
base.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com');
});

export { expect } from '@playwright/test';