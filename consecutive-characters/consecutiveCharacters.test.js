import consecutiveCharacters from "./consecutiveCharacters";

test("consecutiveCharacters: abbcccddddeeeeedcba => 5", () => {
  expect(consecutiveCharacters("abbcccddddeeeeedcba")).toBe(5);
});

test("consecutiveCharacters: leetcode => 2", () => {
  expect(consecutiveCharacters("leetcode")).toBe(2);
});
