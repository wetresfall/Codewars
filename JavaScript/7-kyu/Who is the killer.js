// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d

function killer(suspectInfo, dead) {
  //your code here...
   return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
}
