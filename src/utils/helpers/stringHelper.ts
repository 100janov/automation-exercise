/**
 * This function generates a random password of a specified length.
 * @param length - The length of the password to be generated. Default is 12 characters.
 * @returns {string} - A randomly generated password string.
 */
export function generatePassword(length: number = 12): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}