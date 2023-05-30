// https://www.codewars.com/kata/5bb0c58f484fcd170700063d

function pillars(num_pill, dist, width) {
  return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
}
