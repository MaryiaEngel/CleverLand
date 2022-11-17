'use strict';

const str = "Cleverland";
const n = prompt('Введите число:')
if(n < str.length){
    let result = str.substr(0,n);
    console.log(result + '...');
}
else{
    console.log(str);
}