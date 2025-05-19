import { Locator, expect } from '@playwright/test';

/**
 * Asserts that every element in the locator contains the expected text.
 * @param locator - The Playwright locator for the elements to check.
 * @param expectedText - The string or RegExp the element text should match.
 */
export async function expectAllToContainText(
    locator: Locator,
    expectedText: string | RegExp,
) {
    const count = await locator.count();

    for (let i = 0; i < count; i++) {
        const text = await locator.nth(i).textContent();
        expect(text, `Element at index ${i} does not contain expected text`).toMatch(expectedText);
    }
}