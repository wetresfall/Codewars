// https://www.codewars.com/kata/580751a40b5a777a200000a1

// function vowelOne(s){
//   // ...
// }
let vowelOne = s => s.replace(/./g, c => +/[aeiou]/i.test(c));
