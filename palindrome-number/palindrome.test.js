import isPalindrome from "./palindrome";

test("Palindrome:  11111111111 => true", () => {
  expect(isPalindrome(11111111111)).toBe(true);
});

test("Palindrome: 101 => true", () => {
  expect(isPalindrome(101)).toBe(true);
});

test("Palindrome: -121 => false", () => {
  expect(isPalindrome(-121)).toBe(false);
});
