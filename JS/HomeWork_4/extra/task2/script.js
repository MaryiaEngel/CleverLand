'use strict';

let N = prompt("Enter unit number,please");
let L = prompt("Enter the lenght,please");
if(N == 1){
    let n = L*10;
    console.log(`Это ${n} метров`)
}
else if(N == 2){
    let n = L*1000;
    console.log(`Это ${n} метров`)
}
else if(N == 3){
    let n = L;
    console.log(`Это ${n} метров`)
}
else if(N == 4){
    let n = L/1000;
    console.log(`Это ${n} метров`)
}
else if(N == 5){
    let n = L/100;
    console.log(`Это ${n} метров`)
}
else{
    console.log("Error, you entered the wrong number or not a number")
}