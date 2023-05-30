// https://www.codewars.com/kata/58db721b2f449efaf5000038

// function recognize(s) {
//   return '';
// }
function recognize(s) {
  const n = {
              [' _  _||_ '] : 2,
    [' _   ||_ '] : 2,
    [' _  _||  '] : 2,
              [' _  _| _|'] : 3,
    [' _   | _|'] : 3,
    [' _  _|  |'] : 3,
              ['   |_|  |'] : 4,
    ['   | |  |'] : 4,
              [' _ |_  _|'] : 5,
    [' _ |   _|'] : 5,
    [' _ |_   |'] : 5,
              [' _ |_ |_|'] : 6,
    [' _ |  |_|'] : 6,
    [' _ |_ | |'] : 6,
              [' _   |  |'] : 7,
              [' _ |_||_|'] : 8,
    [' _ | ||_|'] : 8,
    [' _ |_|| |'] : 8,
              [' _ |_| _|'] : 9,
    [' _ | | _|'] : 9,
    [' _ |_|  |'] : 9,
  };
  const sarr = s.split('\n');
  const result = [];
  for(let i=0; i<sarr[0].length; i=i+3) {
    const code = sarr.map(a=>a.slice(i,i+3)).join('');
    n[code] ? result.push(n[code]) : result.push('?');
  }
  return result.join('');
}
