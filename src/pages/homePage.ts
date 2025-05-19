import { Page } from "@playwright/test";
import { Locator } from "playwright";

export class HomePage {

    readonly signUpButton: Locator;

    constructor(readonly page: Page) {
        this.signUpButton = page.locator('text= Signup / Login');
    }

    async goToLoginSignUpPage() {
        await this.signUpButton.click();
    }
}