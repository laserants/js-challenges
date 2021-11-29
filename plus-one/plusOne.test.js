import plusOne from "./plusOne";

test("PlusOne: 123 => 124", () => {
  expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4]);
});

test("PlusOne: 130 => 131", () => {
  expect(plusOne([1, 2, 9])).toStrictEqual([1, 3, 0]);
});


test("PlusOne:999 => 1000", () => {
  expect(plusOne([9, 9, 9])).toStrictEqual([1, 0, 0, 0]);
});

test("PlusOne: 6145390195186705543 => 6145390195186705544", () => {
  expect(
    plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
  ).toStrictEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
});