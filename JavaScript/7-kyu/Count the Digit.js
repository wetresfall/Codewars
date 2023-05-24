// https://www.codewars.com/kata/566fc12495810954b1000030

function nbDig(n, d) {
    // your code
  let res=0;
    for (let g = 0; g <= n; g++){
      let square=(g * g + '').split('');
      square.forEach((s) => s == d ? res++: null)
    } return res;
}
