import { Page } from "@playwright/test";
import { Locator } from "playwright";

export class ProductsPage {

    readonly signUpButton: Locator;
    readonly searchButton: Locator;
    readonly singleProduct: Locator;
    readonly singleProductName: Locator;
    readonly firstFoundProduct: Locator;
    readonly firstFoundProductPrice: Locator;
    readonly firstFoundProductAddToCartButton: Locator;

    constructor(readonly page: Page) {
        this.signUpButton = page.locator('input[id="search_product"]');
        this.searchButton = page.locator('button[id="submit_search"]');
        this.singleProduct = page.locator('div[class="single-products"]');
        this.singleProductName = this.singleProduct.locator('p');
        this.firstFoundProduct = this.singleProduct.first();
        this.firstFoundProductPrice = this.firstFoundProduct.locator('h2').first();
        this.firstFoundProductAddToCartButton = this.firstFoundProduct.locator('a[class="btn btn-default add-to-cart"]').first();
    }

    /**
     * Searches for a product by its name.
     * @param productName 
     */
    async searchForProduct(productName: string) {
        await this.signUpButton.fill(productName);
        await this.searchButton.click();
    }

    /**
     * Clicks the first found product's "Add to Cart" button.
     */
    async addFirstFoundProductToCart() {
        await this.firstFoundProductAddToCartButton.click();
    }
}