import { test, expect } from '../src/fixtures/baseFixture';
import { testUser } from '../src/test-data/credentials';

test.describe("Test Login and Logout Functionality", { tag: [] }, () => {

    test('should successfully log in and log out from the user', async ({ page, loginPage, header }) => {

        await test.step('Open the Sign Up/Login Page', async () => {
            await header.goToLoginSignUpPage();
            await expect(page).toHaveURL(/\/login/);
        });

        await test.step('Log in with an existing user', async () => {
            const userName = "wiserTest";

            await loginPage.enterEmailAndPasswordForLogin(testUser.email, testUser.password);
            expect(header.logoutLink).toBeVisible();
            expect(header.deleteAccountLink).toBeVisible();
            await expect(page.getByText(`Logged in as ${userName}`)).toBeVisible();

        });

        await test.step('Log out from the account', async () => {
            await header.logoutFromAccount();
            expect(header.signUpButton).toBeVisible();
            expect(header.deleteAccountLink).not.toBeVisible();
            await expect(page).toHaveURL(/\/login/);

        });

    });
});