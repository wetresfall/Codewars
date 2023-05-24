// https://www.codewars.com/kata/595877be60d17855980013d3

let euclideanDistance = (p1, p2) => {
  let a = 0;
  for (let i = 0; i < p1.length; ++i) {
    a += Math.pow(p1[i] -p2[i], 2);
  }
  return +Math.sqrt(a).toFixed(2);
  // the distance between the two points, rounded to two decimal places
}
