import { Page } from "@playwright/test";
import { Locator } from "playwright";

export class Header {

    readonly signUpButton: Locator;
    readonly productsLink: Locator;
    readonly logoutLink: Locator;
    readonly deleteAccountLink: Locator;

    constructor(readonly page: Page) {
        this.signUpButton = page.locator('a[href="/login"]');
        this.productsLink = page.locator('a[href="/products"]');
        this.logoutLink = page.locator('a[href="/logout"]');
        this.deleteAccountLink = page.locator('a[href="/delete_account"]');
    }

    /**
     * Clicks the sign-up button in the header.
     */
    async goToLoginSignUpPage() {
        await this.signUpButton.click();
    }

    /**
     * Clicks the products link in the header.
     */
    async goToProductsPage() {
        await this.productsLink.click();
    }

    /**
     * Clicks the logout link in the header.
     */
    async logoutFromAccount() {
        await this.logoutLink.click();
    }
}
