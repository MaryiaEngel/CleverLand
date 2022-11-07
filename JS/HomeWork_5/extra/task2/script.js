'use strict';

let n = prompt('Введите любое число', '');
for(let i = n-1 ; i >= 2 ; i--){
   n *= i;
    console.log(n);
}