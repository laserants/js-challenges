var convert = function (s, numRows) {
  if (numRows === 1 || s.length === 1) {
    return s;
  }

  const matrix = [...new Array(numRows)].map(() => []);

  let r = 0;
  let ord = "asc";

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    matrix[r].push(c);

    if (ord === "asc") {
      r++;

      if (r === numRows - 1) ord = "desc";
    } else {
      r--;
      if (r === 0) ord = "asc";
    }
  }

  return matrix.reduce((prev, curr) => {
    prev += curr.join("");
    return prev;
  }, "");
};

export default convert;
