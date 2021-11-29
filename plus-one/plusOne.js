function plusOne(d) {
  let i = d.length - 1;
  while (i >= 0) {
    d[i]++;
    if (d[i] < 10) return d;
    d[i] = 0;

    if (i === 0) { d.unshift(1)}
    i--;
  }
  return d;
}

export default plusOne;
