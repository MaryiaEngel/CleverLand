'use strict';

function calcDegree() {
    if(r>= 0 && r <=360){
      return r = (r * 3.14)/180;}
    else{
      return("Error, Wrong Input")}}
let r = prompt("Введите значение угла в градусах");
console.log(calcDegree());


