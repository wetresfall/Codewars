// https://www.codewars.com/kata/5effa412233ac3002a9e471d

function add(a, b) {
  var result = 0;
  var k = 1;
  if (b > a) {
    [a, b] = [b, a];
  }
  while (a / 10) {
    var sum = a % 10 + b % 10;
    result += sum * k;
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
    k *= sum > 9 ? 100 : 10;
  }
  return result;
}
