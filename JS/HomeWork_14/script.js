'use strict';

const r = document.getElementById("result");
const btn = document.querySelector(".btn");
let timer;
let value;
let firstClick = true;

btn.onclick = () => {
  if(firstClick) {
    let a = Number(document.querySelector('#a').value);
    var b = Number(document.querySelector('#b').value); 
    value = a;
    firstClick = false;
  }
    if (btn.innerHTML === "Пуск") {
        timer = setInterval(() => {
          if(value == b) {
            clearTimeout(timer);
            btn.innerHTML = "Пуск";
            firstClick = true;
          }
          r.innerHTML = parseInt(value++);}, 1000);
    btn.innerHTML = "Пауза";
  }
    else {
        clearTimeout(timer);
        btn.innerHTML = "Пуск";
    }}



