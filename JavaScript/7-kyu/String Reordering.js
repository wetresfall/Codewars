// https://www.codewars.com/kata/5b047875de4c7f9af800011b

// your code
let sentence = List =>
  List
    .sort((el1, el2) => Object.keys(el1)[0] - Object.keys(el2)[0])
    .map(el => Object.values(el)[0])
    .join(' ')
