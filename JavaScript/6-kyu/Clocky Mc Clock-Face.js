// https://www.codewars.com/kata/59752e1f064d1261cb0000ec

let whatTimeIsIt = function(angle) {
  let h = ~~(angle/30), m = ~~((angle%30)*2);
  return `${h==0?12:h>9?h:"0"+h}:${m>9?m:"0"+m}`
}
