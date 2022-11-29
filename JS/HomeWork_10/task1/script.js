'use strict';

let fruits = ['Яблоко', 'Апельсин', 'Слива',];
fruits.push('Абрикос');
fruits.unshift('Нектарин' ,'Персик');
fruits.splice(fruits.indexOf('Яблоко'),2);
console.log(fruits);
let favoriteFruits = fruits.slice(0,3);
console.log(favoriteFruits);
let berries=['Барбарис', 'Виноград', 'Годжи'];
fruits = fruits.concat(berries);
console.log(fruits);
console.log('Длина массива "fruits" равна : ' + fruits.length);
favoriteFruits.forEach((item,index) => {
    console.log('У позиции ' + item+ ' индекс равен ' + index);
  });
console.log('Индекc элемента "Слива" в массиве " fruits" равен : ' + fruits.indexOf('Слива'));
if(fruits.includes('Яблоко')){
  console.log('Элемент "Яблоко" содержится в массиве "fruits"')
}
else{
  console.log('Элемент "Яблоко" не содержится в массиве "fruits"')
}
