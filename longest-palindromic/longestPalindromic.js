var longestPalindrome = function (s) {
  for (let j = s.length - 1; j >= 0; j--) {
    let i = 0,
      k = j;
    while (k < s.length) {
      let substr = s.substring(i, k + 1);
      if (isPalindrome(substr)) return substr;
      i++, k++;
    }
  }
  return "";
};

var isPalindrome = function (str) {
  const l = str.length;

  for (let i = 0; i < l / 2; i++) {
    if (str[i] !== str[l - i - 1]) return false;
  }
  return true;
};

export default longestPalindrome 