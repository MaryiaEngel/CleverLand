'use strict';
function checkNumber(n){
    if(n > 10){
        return n*n;
    }
    else if (n <= 7){
        return ('Число меньше 7')
    }
    else if(n >= 8 && n <= 9){
        return n-1;
    }
    else{
        return('Wrong Input!')
    }
}
let n = prompt('Введите число:');
console.log(checkNumber(n));