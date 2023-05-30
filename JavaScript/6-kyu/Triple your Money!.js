// https://www.codewars.com/kata/64294e2be00c71422d1f59c2

function f(n) {
  // your code here ..
  let check = 3 ** ~~(Math.log(n) / Math.log(3)) * (n > 0);  
  return n + check + (n > check * 2) * (n - check * 2) * 2;
}
