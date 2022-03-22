function ParentesisValido(input) {
  let pila = [];
  const parejas = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i <= input.length; i++) {
    if (input[i] == "(" || input[i] == "{" || input[i] == "[") {
      pila.push(parejas[input[i]]);
    } else {
      const last = pila.pop();
      if (last != input[i]) return false;
    }
  }
  if (pila.length > 0) return false;

  return true;
}

export default ParentesisValido;
