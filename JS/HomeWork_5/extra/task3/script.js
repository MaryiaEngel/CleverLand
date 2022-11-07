'use strict';

let n = prompt('Введите любое число', '');
while(n%1 == 0){
    if(n >=1 && n<=10){
        console.log(n);
        console.log("1");
        console.log(n)
        console.log(n)}
    else if(n >= 10 && n<= 99){
        console.log(`${Math.floor(n/10)} , ${(n%10)}`);
        console.log("2");
        console.log(Math.floor(n/10) + (n%10))
        console.log(`${(n%10)}${Math.floor(n/10)}`)}
    else if(n >= 100 && n<= 999 ){
        console.log(`${Math.floor(n/100)}, ${Math.floor((n%100)/10)}, ${(n%10)}`);
        console.log("3")
        console.log(Math.floor(n/100) + Math.floor((n%100)/10)+ (n%10));
        console.log(`${(n%10)}${Math.floor((n%100)/10)}${Math.floor(n/100)}`)}
    else if(n >= 1000 && n<= 9999){
        console.log(`${Math.floor(n/1000)}, ${Math.floor((n%1000)/100)}, ${Math.floor((n%100)/10)}, ${(n%10)}`);
        console.log("4")
        console.log(Math.floor(n/1000) + Math.floor((n%1000)/100) + Math.floor((n%100)/10) + (n%10));
        console.log(`${(n%10)}${Math.floor((n%100)/10)}${Math.floor((n%1000)/100)}${Math.floor(n/1000)}`)}
    else{
        console.log("Error,wrong input!")
    }
        break}