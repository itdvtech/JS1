"use strict";

/* 1 задание */

let i = 2;

while(i <= 100) {
  if (isSimple(i)) {
    document.write(i + " ");
  }
  i++
}

function isSimple(i) {
  let k = 2;
  while (k < i) {
    if (i % k == 0) {
      return false;
    }
    k++;
  }
  return true;
}

/* 2-3 задания */
// let car = 500, ball = 750, chess = 699;
// let goods = [car, ball, chess];
// let j = 0;
// function countBasketPrice() {
//   for (let value of goods) {
//     j += value;
//   }
//   return j;
// }

// document.write(countBasketPrice());


/* 4 задание */

// for (let i = 0; i <= 9; console.log(i++));

/* 5 задание */

// let string = '';

// for (let i = 0; i <= 20; i++) {
//   string += 'x';
//   console.log(string);
// }
