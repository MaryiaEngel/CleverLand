'use strict';

r = prompt("Введите значение угла в градусах");
let degree;
if(r >= 0 && r <=360){
  degree = () => r * 3.14/180;}
else{
  console.log("Error, Wrong Input")}
console.log(degree());

