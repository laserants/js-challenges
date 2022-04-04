var convert = function (s, numRows) {
  if (numRows === 1 || s.length === 1) {
    return s;
  }

  const matrix = Array(numRows).fill("");

  let r = 0;
  let ord = "desc";

  for (let i = 0; i < s.length; i++) {
    matrix[r] += s[i];

    if (ord === "desc") {
      r++;

      if (r === numRows - 1) ord = "asc";
    } else {
      r--;
      if (r === 0) ord = "desc";
    }
  }

  return matrix.join("");
};

export default convert;
