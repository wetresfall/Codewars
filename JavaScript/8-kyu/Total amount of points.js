// https://www.codewars.com/kata/5bb904724c47249b10000131

const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0);
