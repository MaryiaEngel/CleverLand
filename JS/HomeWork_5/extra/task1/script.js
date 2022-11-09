'use strict';

let n = prompt("Введите число");
for (let i = 10; i <= 99; i++){
    if((Math.floor(i/10)+ i%10)%n != 0)
      continue
      console.log(i);}


