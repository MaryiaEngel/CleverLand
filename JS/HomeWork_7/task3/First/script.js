'use strict';

function calcNumbers(n){
    for(let i = n-1 ; i >= 2 ; i--){
        n *= i;}
    return n;}
let n = prompt('Введите любое число', '');
console.log(calcNumbers(n));
