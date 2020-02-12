"Use strict";

/* 3 задание */

// let a = 64;
// let b = 12;
// let c;

// if(a > 0 && b > 0) {
//   alert(a - b);
// } else if (a < 0 && b < 0) {
//   alert(a * b);
// } else {
//   alert(a + b);
// }

/* 4 задание */

// let a = +prompt('Введите число от 1 до 15: ');

// switch(a) {
//   case 1:
//     alert(a);
//     a++;
    
  
//   case 2:
//     alert(a);
//     a++;
    
//   case 3:
//     alert(a);
//     a++;
    
//   case 4:
//     alert(a);
//     a++;
    
//   case 5:
//     alert(a);
//     a++;
    
//   case 6:
//     alert(a);
//     a++;
    
//   case 7:
//     alert(a);
//     a++;  

//   case 8:
//     alert(a);
//     a++;
    
//   case 9:
//     alert(a);
//     a++;
    
//   case 10:
//     alert(a);
//     a++;  
    
//   case 11:
//     alert(a);
//     a++;
    
//   case 12:
//     alert(a);
//     a++;
    
//   case 13:
//     alert(a);
//     a++;
    
    
//   case 14:
//     alert(a);
//     a++;
    
    
//   case 15:
//     alert(a);
//     a++;  
// }


/* 5 задание */


function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

/* 6 задание */


// function mathOperation(a, b, operation) {
//   switch(operation) {
//     case 'sum':
//       return sum(a, b);

//     case 'diff':
//       return  diff(a, b);
      
//     case 'multi':
//       return multi(a, b);
      
//     case 'div':
//       return div(a, b);
//   }
// }

// document.write(mathOperation(20, 66, 'multi'));


/* 8 задание */

function power(val, pow) {
  if (pow == 1) {
    return val;
  } else {
    return val * power(val, pow - 1);
  }
}

alert(power(2, 3));