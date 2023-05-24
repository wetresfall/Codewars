// https://www.codewars.com/kata/54cb61619b30e88e44001048

function runYourString (arg, obj) {
  //your code here
  let {param, func} = obj;
  return new Function(param, func)(arg);
}
