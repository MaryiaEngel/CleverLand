'use strict';

let salary = {
    Smith: 3000,
    Miller: 4000,
    Johnson: 5000,
    Jones: 2000,
    Wilson: 7000,
    Jackson: 8000,
    Carter: 1000,
    Walker: 10000,
    Robinson: 9000,
    Lewis: 6000,
  }

let newSalary = {};
Object.assign(newSalary, salary);

let sum = 0;
let amount = 0;
for (let key in salary) {
  sum += salary[key];
  amount ++;
}
let salaryAverage = sum/amount;
console.log('Средняя зарплата равна : ' + salaryAverage);
newSalary.salaryAverage = salaryAverage;

let averagePeople = 0;
for(let key in salary){
    if(salary[key] >= salaryAverage){
         averagePeople ++;}}
console.log(averagePeople + '  работников получают зарплату не меньше средней.')
newSalary.averagePeople = averagePeople;