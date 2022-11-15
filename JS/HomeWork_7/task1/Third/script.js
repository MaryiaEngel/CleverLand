'use strict';

const r = prompt("Введите значение угла в градусах");
const degree = () => r * 3.14/180;;

if(r >= 0 && r <=360){
  console.log(degree());}
else{
  console.log("Error, Wrong Input")}
console.log(degree());

