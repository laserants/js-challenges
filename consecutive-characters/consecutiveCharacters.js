var consecutiveCharacters = function (s) {
  let count = 1;
  let max = 1;

  for (let i = 1; i < s.length; i++) {
    const c = s[i];

    if (c === s[i - 1]) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 1;
    }
  }

  return max;
};

export default consecutiveCharacters;
