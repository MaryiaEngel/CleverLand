'use strict';

let date = Date.parse('2022-10-27T00:00:00');
let newDate = new Date();
let now = newDate.getTime();
let result = (now - date)/ (1000 * 60 * 60); 
console.log(Math.round(result));