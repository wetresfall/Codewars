// https://www.codewars.com/kata/56b97b776ffcea598a0006f2

let bubblesortOnce = (a) => {
  // TODO
  return a.reduce((num, str, i) => {
    if (num[i] >= a[i + 1]) {
      num[i + 1] = num[i];
      num[i] = a[i+1]
    }
    return num;
  }, [...a]);
}
