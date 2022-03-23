import zigZag from "./zigZag";

test("zigZag: PAYPALISHIRING, 3 => PAHNAPLSIIGYIR", () => {
  expect(zigZag("PAYPALISHIRING", 3)).toStrictEqual("PAHNAPLSIIGYIR");
});

test("zigZag: PAYPALISHIRING, 4 => PAHNAPLSIIGYIR", () => {
  expect(zigZag("PAYPALISHIRING", 4)).toStrictEqual("PINALSIGYAHRPI");
});

test("zigZag: GUATEMALAESUNPAISGENIAL, 5 => GASULEIGAASAELTMUPNAENI", () => {
  expect(zigZag("GUATEMALAESUNPAISGENIAL", 5)).toStrictEqual(
    "GASULEIGAASAELTMUPNAENI"
  );
});

test("zigZag: ABC, 1 => ABC", () => {
  expect(zigZag("ABC", 1)).toStrictEqual("ABC");
});

test("zigZag: A, 1 => A", () => {
  expect(zigZag("A", 1)).toStrictEqual("A");
});
