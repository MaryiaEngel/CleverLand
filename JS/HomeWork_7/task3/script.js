'use strict';

function calcNumbers(n){
    for(let i = n-1 ; i >= 2 ; i--){
        n *= i;}
    return n;}
let n = prompt('Введите любое число', '');
console.log(calcNumbers(n));



'use strict';

//let n = prompt('Введите любое число', '');
let calc = function (){
    for(let i = n-1 ; i >= 2 ; i--)
        n *=i;
        console.log(n);}
//calc();


'use strict';

//let n = prompt('Введите любое число', '');
//let calc = () => {
    for(let i = n-1 ; i >= 2 ; i--)
        n *=i;
        return n;}
//console.log(calc());