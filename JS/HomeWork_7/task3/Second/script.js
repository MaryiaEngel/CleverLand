
'use strict';

let n = prompt('Введите любое число', '');
let calc = function (){
    for(let i = n-1 ; i >= 2 ; i--)
        n *=i;
        console.log(n);}
calc();
