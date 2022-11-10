'use strict';

function hello(name) {
    if(name === undefined) ;
    console.log("Привет, " + (name || "Гость"))}   
let name = prompt ("Введите Ваше имя");
hello(name);