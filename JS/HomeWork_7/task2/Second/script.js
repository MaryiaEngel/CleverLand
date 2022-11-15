'use strict';

let sum=0;
const a = +prompt("Введите число");
const b = +prompt("Введите число");
sumNumbers = function (){
    console.log( 'Сумма чисел равна  ' + sum );}
if(a%1==0 && b%1==0){
    if (a < b) {
        for (let i = a; i<=b; i++ ) {
            sum += i;}
    } else if (a>b) {
        for (let i = a; i>=b; i-- ) {
            sum += i;}}
else{
    console.log('Error!Введите натуральное число!')}}
sumNumbers();



