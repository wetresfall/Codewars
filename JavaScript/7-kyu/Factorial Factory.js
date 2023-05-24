// https://www.codewars.com/kata/528e95af53dcdb40b5000171

let factorial = (n) => {
  if (n == 0)
    return 1;
  if (n <0)
    return null;
  return n * factorial(n - 1);
}
