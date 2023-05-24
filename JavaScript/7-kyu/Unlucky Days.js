// https://www.codewars.com/kata/56eb0be52caf798c630013c0

function unluckyDays(year){
  //your code here
let days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];
let count = 0

for (let month = 0; month<=11;month++){
  for(let date = 1;date<31;date++){
    let d = new Date(year,month, date);
    let n = d.getDay();

    if(date === 13 && days[n] === 'Пятница') {
      count ++
    }
   }
  }
return count
}
