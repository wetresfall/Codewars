// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819

// function combine() {
//   // Your code here
// }

let combine = (...args) => args.reduce ((pre, val) => (Object.keys(val).forEach(v => pre[v] = (pre[v] || 0) + val[v]), pre), {});
