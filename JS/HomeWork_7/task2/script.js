'use strict';

function sumNumbers(){
    if(a%1==0 && b%1==0){
        sum =(b-a)*((b-a+1)/2);
        return( 'Сумма чисел равна  ' + sum );}
    else{
        return('Error!Введите натуральное число!')}}
let a = prompt("Введите число");
let b = prompt("Введите число");
console.log(sumNumbers());