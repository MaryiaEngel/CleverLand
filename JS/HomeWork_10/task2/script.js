'use strict';

let arr=[2, -15, 12, 83, -29, 111, -6, 22];
let result = arr.findIndex((item) => {
    if(item >= 100 && item <= 999){
        console.log('Индекс трехзначного элемента равен : ' + arr.indexOf(item))
    }});
let answer = arr.find((item) => {
    if(item%5 == 0){
        console.log('Элемент кратный 5 это ' + item  )
    }});
let newArr = console.log(arr.filter(item => item > 0));
console.log(arr.sort((a,b) => (a-b)));
console.log(arr.sort((a,b) => (b-a)));
console.log(arr.reverse());
console.log('Произведение элементов в массиве равно ' + arr.reduce((a,b) => (a*b)));
let sum  = arr.reduce((a, b) => (a + b), 0);
console.log('Среднее арифметическое элементов массива равно ' + sum/arr.length)
