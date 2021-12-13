import mostWater from "./mostWater";

test("[1, 8, 6, 2, 5, 4, 8, 3, 7] => 49", () => {
  expect(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});
test("[1, 1] => 1", () => {
  expect(mostWater([1, 1])).toBe(1);
});
test("[4, 3, 2, 1, 4] => 16", () => {
  expect(mostWater([4, 3, 2, 1, 4])).toBe(16);
});
test("[1, 2, 1] => 2", () => {
  expect(mostWater([1, 2, 1])).toBe(2);
});
