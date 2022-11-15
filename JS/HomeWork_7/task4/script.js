'use strict';

let price = prompt("Введите стоимость:");
let payment = prompt("Введите cумму оплаты:");
function calc(price,payment){
    return price - payment;}
function printResult(){
    if (calc(price,payment) == 0){
        return("Спасибо за покупку!");
    }
    else if (calc(price,payment) < 0){
        return "Ваша сдача: " + (calc(price,payment)*-1);
    }
    else if(calc(price,payment) > 0){
        return("Недостаточная сумма для оплаты!");
    }}
console.log(printResult());