import { Locator, Page } from "@playwright/test";

export class AddedToCartModal {
    readonly viewCartHyperLink: Locator;

    constructor(readonly page: Page) {
        this.viewCartHyperLink = page.locator('a').filter({ hasText: 'View Cart' })
    }

    /**
     * Clicks the "View Cart" hyperlink in the added to cart modal.
     */
    async clickViewCartHyperLink() {
        await this.viewCartHyperLink.click();
    }
}
