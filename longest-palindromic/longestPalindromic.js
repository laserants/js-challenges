function LongestPalindromic(input) {
  let output = input[0];
  let long = 0;
  let ban = 0;
  let x = 0;
  let inicio = "";
  let fin = "";

  for (let i = 0; i < input.length; i++) {
    if (ban == 0) x = input.length - 1;

    for (let j = x; j > 0; j--) {
      if (i != j && j > i) {
        if (input[i] == input[j]) {
          inicio = inicio + input[i];
          fin = input[i] + fin;

          if (i + 1 == j - 1) inicio = inicio + input[i + 1];

          if (i + 1 == j || i + 1 == j - 1) {
            if ((inicio + fin).length > long) {
              output = inicio + fin;
              inicio = "";
              fin = "";
              long = output.length;
            } else if (i + 1 == j) {
              inicio = "";
              fin = "";
            }
          } else {
            ban = 1;
            x = j - 1;
          }
          j = 0;
        }
      }
    }
  }
  return output;
}

export default LongestPalindromic;
