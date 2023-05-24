// https://www.codewars.com/kata/60908bc1d5811f0025474291

const findSquares = num => {
  let maxNum = Math.ceil(num / 2);
  let minNum = num - maxNum;
  return `${maxNum * maxNum}-${minNum * minNum}`;
};
