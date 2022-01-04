var isPalindrome = function (x) {
  if (x < 0) return false;
  const str = "" + x;
  const l = str.length;

  for (let i = 0; i < l / 2; i++) {
    if (str[i] !== str[l - i - 1]) return false;
  }
  return true;
};

// Forma no óptima
var isPalindrome1 = function (x) {
  const str = "" + x;

  return str === str.split("").reverse().join("");
};

// https://jsben.ch/Ghiid
