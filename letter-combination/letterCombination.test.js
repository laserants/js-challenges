import letterCombination from "./letterCombination";

test("letterCombination: 2 digits", () => {
  expect(letterCombination("23")).toStrictEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});

test("letterCombination: 3 digits", () => {
    expect(letterCombination("234")).toStrictEqual([
      "adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi",
    ]);
  });