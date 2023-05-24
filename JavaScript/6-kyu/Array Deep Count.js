// https://www.codewars.com/kata/596f72bbe7cd7296d1000029

function deepCount(a){
//..
  return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
}
