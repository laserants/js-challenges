import bestTimeToBuy from "./bestTimeToBuy";
test("[7,6,4,3,1] should be 0", () => {
  expect(bestTimeToBuy([7, 6, 4, 3, 1])).toBe(0);
});

test("[1,2] should be 1", () => {
  expect(bestTimeToBuy([1, 2])).toBe(1);
});

test("[7,1,5,3,6,4] should be 5", () => {
  expect(bestTimeToBuy([7, 1, 5, 3, 6, 4])).toBe(5);
});
