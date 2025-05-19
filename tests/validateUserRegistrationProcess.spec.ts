import { test, expect } from '../src/fixtures/baseFixture';
import { AccountCreatedPage } from "../src/pages/accountCreatedPage";
import { generateFakeSignUpData } from '../src/utils/helpers/dataGenerator';
import { SignUpPage } from '../src/pages/signUpPage';
import { faker } from '@faker-js/faker';

test.describe("Validate User Registration Process", { tag: [] }, () => {

    test('should successfully register a new user with valid details', async ({ page, header, loginPage }) => {
        const signUpPage = new SignUpPage(page);
        const accountCreatedPage = new AccountCreatedPage(page);

        await test.step('Open the Sign Up/Login Page', async () => {
            await header.goToLoginSignUpPage();
            await expect(page).toHaveURL(/\/login/);
        });

        await test.step('Enter Name and Email for Sign Up and submit', async () => {
            const randomEmail = faker.internet.email();
            const fullName = faker.person.fullName();

            await loginPage.enterNameAndEmailForSignUp(fullName, randomEmail);
        });

        await test.step('Fill in the mandatory fields and submit', async () => {
            const signUpData = generateFakeSignUpData();

            await signUpPage.populateMandatorySignUpFields(signUpData);
            await signUpPage.clickCreateAccountButton();
            await expect(accountCreatedPage.accountCreatedLabel).toHaveText('Account Created!');
            await expect(page).toHaveURL(/\/account_created/);

        });

        await test.step('Verify if the user is logged in after sign up', async () => {
            await accountCreatedPage.continueButton.click();
            await expect(header.logoutLink).toBeVisible();
            expect(header.deleteAccountLink).toBeVisible();
        });

    });

});