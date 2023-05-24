// https://www.codewars.com/kata/5a34da5dee1aae516d00004a

let getMatrix = (num) => {
  // good luck
  let matrix = []
    for (let i = 0; i < num; i++) {
      matrix[i] = Array(num).fill(0)
      matrix[i][i] = 1;
  }
  return matrix;
} 
