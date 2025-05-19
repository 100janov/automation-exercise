import { Page } from "@playwright/test";
import { Locator } from "playwright";

export class LoginPage {

    readonly nameSignUpInputField: Locator;
    readonly emailSignUpInputField: Locator;
    readonly signUpButton: Locator;

    constructor(readonly page: Page) {
        this.nameSignUpInputField = page.getByTestId('signup-name');
        this.emailSignUpInputField = page.getByTestId('signup-email');
        this.signUpButton = page.getByTestId('signup-button');
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
}