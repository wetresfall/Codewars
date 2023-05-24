// https://www.codewars.com/kata/5a5915b8d39ec5aa18000030

function findMissing(arr1, arr2) {
  // Your solution here
  let reducer = (accumulator, currentValue) => accumulator + currentValue
    return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}
