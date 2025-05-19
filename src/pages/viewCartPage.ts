import { Locator, Page } from "@playwright/test";

export class ViewCartPage {
    readonly cartItemPrice: Locator;
    readonly cartItemDescription: Locator;
    readonly cartItemQuantity: Locator;

    constructor(readonly page: Page) {
        this.cartItemPrice = page.locator('.cart_price');
        this.cartItemDescription = page.locator('.cart_description');
        this.cartItemQuantity = page.locator('button.disabled');
    }
}