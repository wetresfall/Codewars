// https://www.codewars.com/kata/580755730b5a77650500010c

let sortMyString = (str) => {
  let a = str.split(""), sodd = [], seven = [];
  for (let i = 0; i < a.length; i++)
    if (i % 2 === 0) seven.push(a[i]);
    else sodd.push(a[i]);
  return seven.join("") + " " + sodd.join("");
}
