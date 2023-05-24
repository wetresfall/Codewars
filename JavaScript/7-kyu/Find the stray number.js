// https://www.codewars.com/kata/57f609022f4d534f05000024

let stray = (numbers) => {
  for (let i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i]))
      return numbers[i]
  }
}
