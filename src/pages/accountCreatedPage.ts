import { Page } from "@playwright/test";
import { Locator } from "playwright";

export class AccountCreatedPage {

    readonly accountCreatedLabel: Locator;
    readonly continueButton: Locator;

    constructor(readonly page: Page) {
        this.accountCreatedLabel = page.getByTestId('account-created');
        this.continueButton = page.getByTestId('continue-button');
    }
}
