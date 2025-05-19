import { test, expect } from '../src/fixtures/baseFixture';
import { ViewCartPage } from '../src/pages/viewCartPage';
import { ProductsPage } from '../src/pages/products/productsPage';
import { expectAllToContainText } from '../src/utils/helpers/assertions';
import { AddedToCartModal } from '../src/pages/products/addedToCartModal';

test.describe("Search and Add a Product to Cart", { tag: [] }, () => {

    test('should successfully add a product to the cart', async ({ page, header }) => {
        const productsPage = new ProductsPage(page);
        const addedToCartModal = new AddedToCartModal(page);
        const viewCartPage = new ViewCartPage(page);

        let firstProductPrice: string;
        const productName = 'T-Shirt';

        await test.step('Open the Products Page', async () => {
            await header.goToProductsPage();
            expect(page).toHaveURL(/\/products/);
        });

        await test.step('Search for a product', async () => {
            await productsPage.searchForProduct(productName);

            await expectAllToContainText(productsPage.singleProductName, productName);

        });

        await test.step('Add the first found product to the cart and open the cart', async () => {
            firstProductPrice = await productsPage.firstFoundProductPrice.innerText();

            await productsPage.addFirstFoundProductToCart();
            await addedToCartModal.clickViewCartHyperLink();

        });

        await test.step('Verify if the correct product is in the cart', async () => {
            const cartProductName = await viewCartPage.cartItemDescription.innerText();
            const cartProductPrice = await viewCartPage.cartItemPrice.innerText();

            expect(cartProductName).toContain(productName);
            expect(cartProductPrice).toEqual(firstProductPrice);
            expect(viewCartPage.cartItemQuantity).toHaveText('1');

        });

    });
});