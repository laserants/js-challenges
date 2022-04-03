var isHappy = function (n) {
  let set = new Set();

  while (!set.has(n)) {
    set.add(n);
    let s = n.toString();
    n = 0;
    for (let i = 0; i < s.length; ++i) {
      n += Math.pow(s[i], 2);
    }
    if (n == 1) return true;
  }

  return false;
};

export default isHappy;
