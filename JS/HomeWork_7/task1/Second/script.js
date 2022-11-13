'use strict';

const r = prompt("Введите значение угла в градусах");
const degree = function(){
    console.log(r * 3.14/180);};

if(r >= 0 && r <=360){
    degree();}
else{
    console.log("Error, Wrong Input")}


