// https://www.codewars.com/kata/5262119038c0985a5b00029f


// function isPrime(num) {
//   //TODO
// }
function isPrime(num) {
  if (num <= 1) return false;
  for( let x = 2; x <= Math.sqrt(num); x += 1) {
      if (num % x === 0) return false;
    }
    return true;
  }
