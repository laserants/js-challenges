import romanInteger from "./romanInteger";

test("romanInteger: III => 3", () => {
  expect(romanInteger("III")).toBe(3);
});

test("romanInteger: LVIII => 58", () => {
  expect(romanInteger("LVIII")).toBe(58);
});

test("romanInteger: MCMXCIV => 1994", () => {
  expect(romanInteger("MCMXCIV")).toBe(1994);
});
