// https://www.codewars.com/kata/5a2cb4bff28b820c33000082

function whoseBicycle(diary1, diary2, diary3) {
  // good luck. thanks ;
  [diary1, diary2, diary3] = [diary1, diary2, diary3].map(x => Object.values(x).reduce((y, z) => y + z, 0));
  let sum = Math.max(diary1, diary2, diary3);
  return `I need to buy a bicycle for my ${sum === diary3 ? "third" : sum === diary2 ? "second" : "first"} son.`;
}
