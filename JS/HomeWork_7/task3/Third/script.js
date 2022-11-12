'use strict';

let n = prompt('Введите любое число', '');
let calc = () => {
    for(let i = n-1 ; i >= 2 ; i--)
        n *=i;
        return n;}
console.log(calc());