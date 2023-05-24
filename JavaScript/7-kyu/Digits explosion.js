// https://www.codewars.com/kata/585b1fafe08bae9988000314

function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}
