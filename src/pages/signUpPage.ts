import { Page } from "@playwright/test";
import { Locator } from "playwright";
import { SignUpData } from '../types/form.types';

export class SignUpPage {

    readonly passwordInputField: Locator;
    readonly firstNameInputField: Locator;
    readonly lastNameInputField: Locator;
    readonly addressInputField: Locator;
    readonly countryDropdown: Locator;
    readonly stateInputField: Locator;
    readonly cityInputField: Locator;
    readonly zipCodeInputField: Locator;
    readonly mobileNumberInputField: Locator;
    readonly createAccountButton: Locator;

    constructor(readonly page: Page) {
        this.passwordInputField = page.getByTestId('password');
        this.firstNameInputField = page.getByTestId('first_name');
        this.lastNameInputField = page.getByTestId('last_name');
        this.addressInputField = page.getByTestId('address');
        this.countryDropdown = page.getByTestId('country');
        this.stateInputField = page.getByTestId('state');
        this.cityInputField = page.getByTestId('city');
        this.zipCodeInputField = page.getByTestId('zipcode');
        this.mobileNumberInputField = page.getByTestId('mobile_number');
        this.createAccountButton = page.getByTestId('create-account');
    }

    /**
     * Populates the mandatory fields for sign-up.
     * @param data - The SignUpData object containing the mandatory fields to be filled.
     */
    async populateMandatorySignUpFields(data: SignUpData) {
        const {
            password,
            firstName,
            lastName,
            address,
            state,
            city,
            zipCode,
            mobileNumber,
        } = data;

        await this.passwordInputField.fill(password);
        await this.firstNameInputField.fill(firstName);
        await this.lastNameInputField.fill(lastName);
        await this.addressInputField.fill(address);
        await this.countryDropdown.selectOption({ label: data.country });
        await this.stateInputField.fill(state);
        await this.cityInputField.fill(city);
        await this.zipCodeInputField.fill(zipCode);
        await this.mobileNumberInputField.fill(mobileNumber);
    }

    /**
     * This method clicks the "Create Account" button.
     */
    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }

}