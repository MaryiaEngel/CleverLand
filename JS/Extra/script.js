'use strict';

const deg = 6;
const hr = document.querySelector('#hr');
const sc = document.querySelector('#sc');

setInterval(() => {
    let data = new Date();
let hh = data.getHours() * 30;
let mm = data.getMinutes() * deg;
let ss = data.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})