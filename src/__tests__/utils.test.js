// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  test('returns true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });
  test("returns true for palindromes with mixed case", () => {
      expect(isPalindrome("RaceCar")).toBe(true);
    });

  test("returns false for empty string", () => {
      expect(isPalindrome("")).toBe(false);
    });

  test("throws an error if input has non-alphabetic characters", () => {
      expect(() => isPalindrome("racecar123")).toThrow(
        "Input must contain only letters"
      );
    });

  test("throws an error if input is not a string", () => {
      expect(() => isPalindrome(12321)).toThrow("Input must be a string");
    });

});
