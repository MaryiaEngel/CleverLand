'use strict';

const person = {surname:'Engel', name:'Maryia', middleName:'Anna'};
person.birthday ='02.18.1998';
person.occupation = 'Accountant';
person.position = 'HR Manager'
person.experience = '10 years';

const newPerson = (({surname, name, birthday}) => ({surname, name, birthday}))(person);
console.log(newPerson);

delete person.middleName;
if (person.middleName == undefined) {
    console.log('Такого значения нет!')} 
else{
    console.log(person.middleName);}
console.log(person);

let number = 0;
for (let key in person) {
    if (typeof person[key] === 'number') {
      number++;}
console.log(number +' свойств, значениями которых являются числа');}

