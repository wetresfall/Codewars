// https://www.codewars.com/kata/5b6db1acb118141f6b000060

function recycle(arr) {
  let trashTypes = ['paper', 'glass', 'organic', 'plastic']
  let result = []
  trashTypes.map(type => result.push(arr.map(el=> (el.material == type || el.secondMaterial == type) ? el.type : '').filter(el => el != '')))
  return result
}
