// https://www.codewars.com/kata/57ef016a7b45ef647a00002d

let filterHomogenous = (arrays) => {
  // Alea iacta est, code legionary!
  return arrays.filter(str => {
    if (str.length && str.every(elem => typeof elem === 'number'))
      return str
    if (str.length && str.every(elem => typeof elem === 'string'))
      return str
  });
}
