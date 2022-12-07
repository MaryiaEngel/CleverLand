'use strict';

let n = prompt("Введите диагональ монитора в дюймах:");
function getCm(){
    let result = n*2.54;
    return "Диагональ монитора в сантиметрах равна " + result.toFixed(2);
}
console.log(getCm());