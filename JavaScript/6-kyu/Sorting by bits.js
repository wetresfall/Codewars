// https://www.codewars.com/kata/59fa8e2646d8433ee200003f

// function sortByBit(arr) {
//   // your solution here

// }

let sortByBit = arr => arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b)
