// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
  // your code here
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length;
}
