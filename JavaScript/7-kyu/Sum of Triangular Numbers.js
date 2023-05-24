// https://www.codewars.com/kata/580878d5d27b84b64c000b51

function sumTriangularNumbers(n) {
  if (n < 0) {
  return 0;
  }
  else {
    return n * (n + 1) / 2 + sumTriangularNumbers(n - 1);
  }
}
