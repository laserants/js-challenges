import isHappy from "./isHappy";

test("isHappy: 19 => true", () => {
  expect(isHappy(19)).toBe(true);
});
test("isHappy: 2 => false", () => {
  expect(isHappy(2)).toBe(false);
});

test("isHappy: 23 => true", () => {
  expect(isHappy(23)).toBe(true);
});

test("isHappy: 24 => false", () => {
  expect(isHappy(24)).toBe(false);
});
