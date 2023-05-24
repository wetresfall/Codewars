// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

with(require('ramda')){
  let byArrLength = ifElse(Boolean, length, always(0))
  let isEmpty = complement(Boolean)
  let isDiffOne = pipe(Array, adjust(1, head), apply(flip(subtract)), equals(1))
  let Matrix = when(isEmpty, always``)
  let getSortedArrByLength = pipe(Matrix, map(byArrLength), sort(ascend(Number)))
  let getLengthOfMissingArr = ƒ = ([x, ...arr]) =>
      isEmpty(x) ? 0 :
        isDiffOne(x, arr) ? ƒ(arr) : inc(x)
  var getLengthOfMissingArray = pipe(getSortedArrByLength, getLengthOfMissingArr) 
}
