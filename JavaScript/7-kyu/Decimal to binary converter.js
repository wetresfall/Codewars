// https://www.codewars.com/kata/589c414a139f7ef9bc00003b

let decToBin = (d) => {
  let a = '';
  for (; d; d >>= 1) a = (d & 1) + a
  return a || '0';
}
