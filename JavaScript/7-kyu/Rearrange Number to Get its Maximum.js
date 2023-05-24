// https://www.codewars.com/kata/563700da1ac8be8f1e0000dc

let maxRedigit = function(num) {
  if (!num || num <= 100 || num >= 999)
    return null;
  num = num.toString().split('').sort((a, b) => b - a).join('');
  return Number(num);
};
