// https://www.codewars.com/kata/5b752a42b11814b09c00005d

let solve = (a,b) => {
  for (let i = 0; i<24; ++i) {
    if (a) b %= 2 * a;
    if (b) a %= 2 * b;
  }
  return [a, b];
}
