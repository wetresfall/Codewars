// https://www.codewars.com/kata/529f32794a6db5d32a00071f

var Calculator = {
 average: function(...arguments) {
  // Your code here... 
   return arguments.length == 0 ? 0 : arguments.reduce((a, b) => b + a) / arguments.length
 }
};
