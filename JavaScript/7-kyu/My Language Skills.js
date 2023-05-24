// https://www.codewars.com/kata/5b16490986b6d336c900007d

function myLanguages(results) {
    for (let i in results) {
    if (results[i] < 60){
      delete results[i];
    }
  }
  return Object.keys(results).sort(function(a,b){return results[b]-results[a]})
}
