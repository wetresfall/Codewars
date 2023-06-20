// https://www.codewars.com/kata/57e5279b7cf1aea5cf000359

// function maxSum(root) {
//   return 0; // TODO: implementation
// }

let maxSum = (root) => {
  if (!root)
    return 0
  let left = maxSum(root.left) + root.value;
  let right = maxSum(root.right) + root.value;
    return Math.max(left, right)
}
