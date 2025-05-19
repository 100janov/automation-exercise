import { Page } from "@playwright/test";
import { Locator } from "playwright";

export class AccountCreatedPage {

    readonly accountCreatedLabel: Locator;

    constructor(readonly page: Page) {
        this.accountCreatedLabel = page.getByTestId('account-created');
    }

}
