'use strict';

let n = prompt('Введите любое число', '');
while(n%1 == 0){
    if(n >=1 && n<=9){
        console.log("Вы ввели однозначное число, для него результат:");
        console.log(n);
        console.log(n);
        console.log(n)}
    else if(n >= 10 && n<= 99){
        console.log("Вы ввели двухзначное число, для него результат:");
        console.log(`${Math.floor(n/10)} , ${(n%10)}`);
        console.log(Math.floor(n/10) + (n%10));
        console.log(`${(n%10)}${Math.floor(n/10)}`)}
    else if(n >= 100 && n<= 999 ){
        console.log("Вы ввели трёхзначное число, для него результат:");
        console.log(`${Math.floor(n/100)}, ${Math.floor((n%100)/10)}, ${(n%10)}`);
        console.log(Math.floor(n/100) + Math.floor((n%100)/10)+ (n%10));
        console.log(`${(n%10)}${Math.floor((n%100)/10)}${Math.floor(n/100)}`)}
    else if(n >= 1000 && n<= 9999){
        console.log("Вы ввели четырёхзначное число, для него результат :");
        console.log(`${Math.floor(n/1000)}, ${Math.floor((n%1000)/100)}, ${Math.floor((n%100)/10)}, ${(n%10)}`);
        console.log(Math.floor(n/1000) + Math.floor((n%1000)/100) + Math.floor((n%100)/10) + (n%10));
        console.log(`${(n%10)}${Math.floor((n%100)/10)}${Math.floor((n%1000)/100)}${Math.floor(n/1000)}`)}
    else{
        console.log("Error,wrong input!")
    }
        break}