// https://www.codewars.com/kata/5b7176768adeae9bc9000056

let indexEqualsValue = (a) => {
  let min = 0;
  let max = a.length;
  let result = -1;
  while (min < max) {
    let b = Math.floor((min + max) / 2);
    if (a[b] < b) {
      min = b + 1;
    }
    else if(a[b] > b) {
      max = b;
    }
    else {
      max = b;
      result = b;
    }
  }
  return result;
}
