// https://www.codewars.com/kata/546dba39fa8da224e8000467

function runLengthEncoding(str) {
  return (str.match(/(.)\1*/g)||[]).map(function(c) {
    return [c.length, c[0]];
  });
}
