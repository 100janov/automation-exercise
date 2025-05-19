import { faker } from '@faker-js/faker';
import { Country, SignUpData } from '../../types/form.types';

const countries = Object.values(Country);

/**
 * This function generates fake sign-up data.
 * It uses the faker library to create realistic-looking data for testing purposes.
 * @returns {SignUpData} - An object containing fake sign-up data.
 */
export function generateFakeSignUpData(): SignUpData {
    return {
        password: faker.internet.password(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        country: countries[Math.floor(Math.random() * countries.length)],
        state: faker.location.state(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        mobileNumber: faker.phone.number(),
    };
}