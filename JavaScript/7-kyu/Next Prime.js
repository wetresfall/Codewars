// https://www.codewars.com/kata/58e230e5e24dde0996000070

let nextPrime = (n) => {
  //have fun ^.^ thanks ^.^
  if (++n < 2) {
    return 2
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return nextPrime(n)
    }
  }
  return n
}
