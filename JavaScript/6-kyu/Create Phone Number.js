// https://www.codewars.com/kata/525f50e3b73515a6db000b83

let createPhoneNumber = (numbers) => {
  let first = ''
  let second = ''
  let third = ''
  for (var i = 0; i < numbers.length; i++) {
    if (i < 3) {
      first += numbers[i].toString()
    } else if (i >= 3 && i < 6) {
      second += numbers[i].toString()
    } else if (i >= 6) {
      third += numbers[i].toString()
    }
  }
  return `(${first}) ${second}-${third}`
}
