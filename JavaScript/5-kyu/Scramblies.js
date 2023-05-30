// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble (str1, str2) {
  let alph = str1.split('').reduce((p, c) => {return p[c] = (p[c] || 0) + 1, p;}, {});
  return str2.split('').every(v => alph[v]-- > 0);
}
