// https://www.codewars.com/kata/543ddf69386034670d000c7d

function handAngle (date) {
  let pi2 = Math.PI*2;
  let m = date.getMinutes()/60, h = (date.getHours()+m)/12;
  
  let angle = Math.abs(h-m)*pi2;
  return Math.min( angle, pi2-angle )

}
