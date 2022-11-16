'use strict';

let text = prompt("Введите слова: ");
let space = text.split(' ').length-1;
function countText(){
    let result = text.length - space;
    return result;
}
console.log(countText());