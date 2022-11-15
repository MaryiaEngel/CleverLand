'use strict';
function checkAge(age) {
    if (age > 16) {
        return true;
    } else {
        return false;
    }}
let age = prompt('Сколько вам лет?');
if (checkAge(age)){
    console.log('Добро пожаловать!');
}
else {
    console.log('Вы ещё молоды!');
}