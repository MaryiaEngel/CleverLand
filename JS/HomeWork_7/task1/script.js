'use strict';

function calcDegree(r) {
    if(r>= 0 && r <=360){
      return r = (r * 3.14)/180;}
    else{
      return("Error, Wrong Input")}}
r = prompt("Введите значение угла в градусах");
console.log(calcDegree(r));


'use strict';

//r = prompt("Введите значение угла в градусах");
let degree;
if(r >= 0 && r <=360){
  degree = function(){
    console.log(r * 3.14/180)};}
else{
    console.log("Error, Wrong Input")}
degree();

'use strict';

//r = prompt("Введите значение угла в градусах");
let degree;
if(r >= 0 && r <=360){
  degree = () => r * 3.14/180;}
else{
  console.log("Error, Wrong Input")}
console.log(degree());

