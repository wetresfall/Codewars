// https://www.codewars.com/kata/55c211cce1ef691d9b000061

let calculate = (...args1) => (...args2) => [...args1, ...args2].reduce((s, v) => s + v);
