'use strict';

let n = prompt('Введите сумму:')
function doubleN(){
    let newN = parseInt(n);
    let result = newN*2;
    return result + n.replace(newN,'');
}
console.log(doubleN());