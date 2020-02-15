"use strict";

/* 1 задание */
let i = 0, k = 0, x = 100;

point:
while (i <= x) {
  while (k > i) {
    if (i % k == 0) continue point;
    k++;
  }
  document.write(i + " ");
  i++;
}


/* 2-3 задания */
let car = 500, ball = 750, chess = 699;
let goods = [car, ball, chess];
let j = 0;
function countBasketPrice() {
  for (let value of goods) {
    j += value;
  }
  return j;
}

document.write(countBasketPrice());


/* 4 задание */

for (let i = 0; i <= 9; console.log(i++));

/* 5 задание */

let string = '';

for (let i = 0; i <= 20; i++) {
  string += 'x';
  console.log(string);
}
