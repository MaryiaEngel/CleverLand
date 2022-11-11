'use strict';

let price = prompt("Введите стоимость:");
let payment = prompt("Введите cумму оплаты:");
function calc(difference){
    return price - payment;}
function printResult(){
    if (calc(difference) == 0){
        return("Спасибо за покупку!");
    }
    else if (calc(difference) < 0){
        return "Ваша сдача: " + (calc(difference)*-1);
    }
    else if(calc(difference) > 0){
        return("Недостаточная сумма для оплаты!");
    }
}
console.log(printResult());