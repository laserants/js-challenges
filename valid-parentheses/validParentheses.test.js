import isValid from "./validParentheses";

test(" should be true", () => {
  expect(isValid("")).toBe(true);
});

test("{} should be true", () => {
  expect(isValid("{}")).toBe(true);
});

test("{ should be false", () => {
  expect(isValid("{")).toBe(false);
});

test("()[]{} should be true", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test("{[(())]} should be true", () => {
  expect(isValid("{[(())]}")).toBe(true);
});

test("{[(())]}{([][]())}{{(([[]]))}} should be true", () => {
  expect(isValid("{[(())]}{([][]())}{{(([[]]))}}")).toBe(true);
});

test("() should be true", () => {
  expect(isValid("()")).toBe(true);
});

test("] should be false", () => {
  expect(isValid("]")).toBe(false);
});

test("(())[]{} should be true", () => {
  expect(isValid("(())[]{}")).toBe(true);
});

test("{[(())]}(( should be false", () => {
  expect(isValid("{[(())]}((")).toBe(false);
});

test("{[(())]}{([][]())}{{(([[]]))}}() should be true", () => {
  expect(isValid("{[(())]}{([][]())}{{(([[]]))}}()")).toBe(true);
});
