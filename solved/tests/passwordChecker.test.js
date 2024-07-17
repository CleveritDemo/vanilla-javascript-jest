const { checkPassword } = require('../src/passwordChecker');

describe('checkPassword', () => {
  test('should return true for a strong password', () => {
    const password = 'StrongPassword123';
    const result = checkPassword(password);
    expect(result).toBe(true);
  });

  test('should return false for a weak password', () => {
    const password = 'weak';
    const result = checkPassword(password);
    expect(result).toBe(false);
  });

  // Add more test cases here
});describe('checkPassword', () => {
  // Existing test cases
  test('should return true for a strong password', () => {
    const password = 'StrongPassword123';
    const result = checkPassword(password);
    expect(result).toBe(true);
  });

  test('should return false for a weak password', () => {
    const password = 'weak';
    const result = checkPassword(password);
    expect(result).toBe(false);
  });

  // New test cases
  test('should throw an error if password is not a string', () => {
    const password = 12345;
    expect(() => checkPassword(password)).toThrow('Password must be a string');
  });

  test('should throw an error if password is empty', () => {
    const password = '';
    expect(() => checkPassword(password)).toThrow('Password cannot be empty');
  });

  test('should throw an error if password is less than 8 characters', () => {
    const password = 'short';
    expect(() => checkPassword(password)).toThrow('Password must be at least 8 characters');
  });

  test('should throw an error if password is more than 15 characters', () => {
    const password = 'thispasswordistoolong';
    expect(() => checkPassword(password)).toThrow('Password must be at most 15 characters');
  });

  test('should throw an error if password contains the word "password"', () => {
    const password = 'mypassword123';
    expect(() => checkPassword(password)).toThrow('Password cannot contain the word "password"');
  });

  test('should throw an error if password contains only letters', () => {
    const password = 'onlyletters';
    expect(() => checkPassword(password)).toThrow('Password must contain at least one number');
  });

  test('should throw an error if password contains only numbers', () => {
    const password = '1234567890';
    expect(() => checkPassword(password)).toThrow('Password must contain at least one letter');
  });
});