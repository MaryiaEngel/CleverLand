'use strict';

const r = document.getElementById("result");
const btn = document.querySelector(".btn");
let timer;
let value;
let firstClick = true;

btn.onclick = () => {
  let a = document.querySelector('#a').valueAsNumber;
  var b = document.querySelector('#b').valueAsNumber;
  if(firstClick) { 
    value = a
    firstClick = false;
  }
    if (value < b & btn.innerHTML === "Пуск" ) {
        timer = setInterval(() => {
          if(value == b) {
            clearTimeout(timer);
            btn.innerHTML = "Пуск";
            firstClick = true;
          }
          r.innerHTML = parseInt(value++);}, 1000);
          btn.innerHTML = "Пауза";}
    else if (value > b & btn.innerHTML === "Пуск") {
        timer = setInterval(() => {
          if(value == b) {
            clearTimeout(timer);
            btn.innerHTML = "Пуск";
            firstClick = true;
          }
          r.innerHTML = parseInt(value--);}, 1000);
          btn.innerHTML = "Пауза";
  }
    else {
        clearTimeout(timer);
        btn.innerHTML = "Пуск";
    }}
