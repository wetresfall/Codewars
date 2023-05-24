// https://www.codewars.com/kata/5412509bd436bd33920011bc

// return masked string
function maskify(cc) {
  let card = cc.length;
  return cc.slice(-4).padStart(card, '#');
}
