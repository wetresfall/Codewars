// https://www.codewars.com/kata/513e08acc600c94f01000001

// function rgb(r, g, b){
//   // complete this function  
// }

let rgb =(r, g, b) => {
  return [r, g, b].map((x) => {return ("0"+Math.max(0, Math.min(255, x)).toString(16)).slice(-2)}).join("").toUpperCase();
}
