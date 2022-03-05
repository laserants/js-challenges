import threeSum from "./3sum";

test("threeSum: [0, 0, 0] => []", () => {
  expect(threeSum([[0, 0, 0]])).toStrictEqual([]);
});

test("threeSum: [-1, 0, 1, 2, -1, -4] => [[-1, -1, 2], [-1, 0, 1]]", () => {
  const result = threeSum([-1, 0, 1, 2, -1, -4]);
  expect(result).toEqual(
    expect.arrayContaining([expect.arrayContaining([-1, -1, 2])])
  );
  expect(result).toEqual(
    expect.arrayContaining([expect.arrayContaining([-1, 0, 1])])
  );
});

test("threeSum: [] => []", () => {
  expect(threeSum([])).toStrictEqual([]);
});

test("threeSum: [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0] => [[-5, 1, 4],[-4, 0, 4],[-4, 1, 3],[-2, -2, 4],[-2, 1, 1],[0, 0, 0]]", () => {
  const result = threeSum([
    -4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0,
  ]);
  expect(result).toEqual(
    expect.arrayContaining([expect.arrayContaining([-5, 1, 4])])
  );
  expect(result).toEqual(
    expect.arrayContaining([expect.arrayContaining([-4, 0, 4])])
  );
  expect(result).toEqual(
    expect.arrayContaining([expect.arrayContaining([-4, 1, 3])])
  );
  expect(result).toEqual(
    expect.arrayContaining([expect.arrayContaining([-2, -2, 4])])
  );
  expect(result).toEqual(
    expect.arrayContaining([expect.arrayContaining([-2, 1, 1])])
  );
  expect(result).toEqual(
    expect.arrayContaining([expect.arrayContaining([0, 0, 0])])
  );
});
