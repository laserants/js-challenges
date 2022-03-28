var convert = function (s, numRows) {
  if (numRows === 1 || s.length === 1) {
    return s;
  }

  const matrix = [...new Array(numRows)].map(() => []);

  let r = 0;
  let ord = "desc";

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    matrix[r].push(c);

    if (ord === "desc") {
      r++;

      if (r === numRows - 1) ord = "asc";
    } else {
      r--;
      if (r === 0) ord = "desc";
    }
  }

  return matrix.reduce((prev, curr) => {
    prev += curr.join("");
    return prev;
  }, "");
};

export default convert;
