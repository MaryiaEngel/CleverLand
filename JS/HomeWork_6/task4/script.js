'use strict';

function calcPower(a,b){
    return(Math.pow(a,b));
}
let a = prompt("Введите число");
let b = prompt("Введите степень");
alert(calcPower(a,b));

//'use strict';

//let c = 1;
//function calcPower(a,b){
//    for( i=1; i <= b; i++){
//        c *= i;
//    }
//    return(Math.pow(a,b));}
//let a = prompt("Введите число");
//let b = prompt("Введите степень");
//alert(calcPower(a,b));