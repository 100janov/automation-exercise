
/**
 * This enum defines the list of countries that are supported for user sign-up.
 */
export enum Country {
    India = 'India',
    UnitedStates = 'United States',
    Canada = 'Canada',
    Australia = 'Australia',
    Israel = 'Israel',
}

/**
 * This interface defines the structure of the data required for signing up a new user.
 */
export interface SignUpData {
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    country: Country;
    state: string;
    city: string;
    zipCode: string;
    mobileNumber: string;
}