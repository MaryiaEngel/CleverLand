'use strict';

function calcDegree(r) {
    if(r>= 0 && r <=360){
      return r = (r * 3.14)/180;}
    else{
      return("Error, Wrong Input")}}
r = prompt("Введите значение угла в градусах");
console.log(calcDegree(r));


