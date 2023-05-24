// https://www.codewars.com/kata/5aa1bcda373c2eb596000112

function maxTriSum(numbers){
  //your code here
  return ([...new Set(numbers)]).sort((a,b) => a-b).slice(-3).reduce((a,b) => a+b);
}
