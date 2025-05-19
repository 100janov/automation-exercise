import { Page } from "@playwright/test";
import { Locator } from "playwright";

export class LoginPage {

    readonly nameSignUpInputField: Locator;
    readonly emailSignUpInputField: Locator;
    readonly signUpButton: Locator;
    readonly emailLoginInputField: Locator;
    readonly passwordLoginInputField: Locator;
    readonly loginButton: Locator;

    constructor(readonly page: Page) {
        this.nameSignUpInputField = page.getByTestId('signup-name');
        this.emailSignUpInputField = page.getByTestId('signup-email');
        this.signUpButton = page.getByTestId('signup-button');
        this.emailLoginInputField = page.getByTestId('login-email');
        this.passwordLoginInputField = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-button');
    }

    /**
     * Fills the name and email input fields and clicks the sign-up button.
     * @param name - The name to fill in the name input field.
     * @param email - The email to fill in the email input field.
     */
    async enterNameAndEmailForSignUp(name: string, email: string) {
        await this.nameSignUpInputField.fill(name);
        await this.emailSignUpInputField.fill(email);
        await this.signUpButton.click();
    }

    /**
     * Fills the email and password input fields and clicks the login button.
     * @param email - The email to fill in the email input field.
     * @param password - The password to fill in the password input field.
     */
    async enterEmailAndPasswordForLogin(email: string, password: string) {
        await this.emailLoginInputField.fill(email);
        await this.passwordLoginInputField.fill(password);
        await this.loginButton.click();
    }
}