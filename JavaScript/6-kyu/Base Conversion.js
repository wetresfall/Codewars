// https://www.codewars.com/kata/526a569ca578d7e6e300034e

function convert(input, source, target) {
    // TODO
  let inBase = source.length, len = input.length;
  let value = input.split('')
    .reduce(function(p,v,i){return p+source.indexOf(v)*Math.pow(inBase,len-i-1)},0);
  return toBase(value,target);
}

function toBase(value, target){
  let base = target.length;
  if(value<base) return ''+target.charAt(value);
  return toBase(Math.floor(value/base),target) + target.charAt(value%base);
}
