const mappedCharacters = {
  "}": "{",
  "]": "[",
  ")": "(",
};

var isValid = function (s) {
  const openCharactersStack = [];

  for (let c of s) {
    switch (c) {
      case "(":
      case "[":
      case "{":
        openCharactersStack.push(c);
        break;
      default:
        const last = openCharactersStack.pop();
        if (mappedCharacters[c] !== last) return false;
    }
  }

  return !openCharactersStack.length;
};

export default isValid;
