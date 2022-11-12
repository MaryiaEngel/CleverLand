'use strict';
let a = prompt("Введите число");
let b = prompt("Введите число");
let sum;
if(a%1==0 && b%1==0){
    sum = () => 'Сумма чисел равна  ' + (((a+b)*((b-a)+1))/2);}
else{
    console.log('Error!Введите натуральное число!')}
console.log(sum());


