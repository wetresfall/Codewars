// https://www.codewars.com/kata/559f3e20f4f29869cf0000ea

// var OrderPeople = function(people){
//   return people.sort( => ); //complete this function
// }

let OrderPeople = (people) => {
  return people.sort((a, b) => a.age - b.age);
}
