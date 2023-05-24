// https://www.codewars.com/kata/58235a167a8cb37e1a0000db

function numberOfPairs(gloves)
{
  //My hands are freezing
  let arr = Array.from(new Set(gloves));
  return arr.reduce((a,b) => a + Math.floor(gloves.join('').match(new RegExp(b, 'g')).length / 2), 0);
}
