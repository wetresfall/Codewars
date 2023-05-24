// https://www.codewars.com/kata/569d488d61b812a0f7000015

const dataReverse = function(data){
  if (data.length===0) return []
  const arrayBytes = [];
  const tam = data.length / 8;
  for (let i = 0; i < tam; i++){
    arrayBytes.push(data.splice(0,8));
  }
  return arrayBytes.reverse().join().split(',').map(v=>v*1);
}
