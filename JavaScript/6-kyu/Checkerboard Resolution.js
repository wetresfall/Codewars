// https://www.codewars.com/kata/60576b180aef19001bce494d

function countCheckerboard(w, h, r) {
  // All inputs are BigInts
  const [w1, h1, dw, dh] = [w / r, h / r, w % r, h % r];
  
  return   (w1 * h1 / 2n) * r * r
         + (h1 / 2n + w1 % 2n * h1 % 2n) * r * dw
         + (w1 / 2n + w1 % 2n * h1 % 2n) * r * dh
         + (w1 + h1) % 2n * dw * dh;
  // return width * height / 2n; // Easy solution?
}

