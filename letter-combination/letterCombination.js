let keyboard = {
  '1': [],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

var letterCombinations = function (digits) {
if (!digits) return []
let resultadoAnterior = keyboard[digits[0]];
for (let i = 1; i < digits.length; i++) {
  const digit = digits[i]
  let letters = keyboard[digit];
  const tempArray = [];
  
  resultadoAnterior= resultadoAnterior.forEach(l1 => {
    letters.forEach(l2 => {
      tempArray.push(`${l1}${l2}`)
    })
  });
  resultadoAnterior = tempArray;
}

return resultadoAnterior;
};

export default letterCombinations;