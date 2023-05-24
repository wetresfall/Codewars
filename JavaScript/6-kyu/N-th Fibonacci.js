// https://www.codewars.com/kata/522551eee9abb932420004a0

const nthFibo = n => n < 3 ? --n : nthFibo(--n) + nthFibo(--n)
