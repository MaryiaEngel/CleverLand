'use strict';

let sum=0;
function sumNumbers(a,b){
    if(a%1==0 && b%1==0){
        if (a < b) {
            for (let i = a; i<=b; i++ ) {
                sum += i;}
        } else if (a>b) {
            for (let i = a; i>=b; i-- ) {
                sum += i;}}
return( 'Сумма чисел равна  ' + sum );}
    else{
        return('Error!Введите натуральное число!')}}
console.log(sumNumbers(+prompt("Введите число"),(+prompt("Введите число"))));



