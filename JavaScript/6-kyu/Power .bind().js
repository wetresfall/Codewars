// https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f

Function.prototype.bind = function (ctx) {
  let self = this;
  let bound = function () { return self.apply(ctx, [].slice.call(arguments, 1)) };
  bound.bind = function (ctx) { return self.bind(ctx) };
  return bound;
};
