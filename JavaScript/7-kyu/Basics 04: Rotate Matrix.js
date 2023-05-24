// https://www.codewars.com/kata/56b5dd1702a30326ce000b02

let rotateMatrix = arr => {
  let rotate = [];
  let length = arr[0].length;
  for (let i = length - 1; i >= 0; i--) {
    let num = [];
    for (let j = 0; j < arr.length; j++) {
      num.push(arr[j][i]);
    }
    rotate.push(num);
  }
  return rotate;
}
