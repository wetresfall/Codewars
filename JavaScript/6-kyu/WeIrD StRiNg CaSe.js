// https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(string){
  //TODO
  return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
}
