'use strict';

let greeting = "Привет, ";
function hello(greeting, name) {
    console.log(greeting + (name || "Гость"));
}
let name = prompt ("Введите Ваше имя");
console.log(hello(greeting, name));