'use strict';

const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
let date = new Date();
let month = date.getMonth();
let result = months[month];
console.log(result);