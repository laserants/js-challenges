import longestPalindromic from "./longestPalindromic";

test("babad should be bab | aba", () => {
  expect(longestPalindromic("babad")).toBeOneOf(["bab", "aba"]);
});

test("cbbd should be bb", () => {
  expect(longestPalindromic("cbbd")).toBe("bb");
});

test("a should be a", () => {
  expect(longestPalindromic("a")).toBe("a");
});

test("ac should be a | c", () => {
  expect(longestPalindromic("ac")).toBeOneOf(["a", "c"]);
});
