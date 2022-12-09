'use strict';

const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
  btn.innerHTML = 'Пауза';
  let a = Number(document.querySelector('#a').value);
  let b = Number(document.querySelector('#b').value);
  let result = document.querySelector('#result');
  if(b>a){
	let count = 0;
	for(let i = a;i<=b;i++){
		count += i;}
  result.innerHTML= count;}})
//btn.addEventListener('click', function() {
//btn.innerHTML = 'Пуск';})
//btn.addEventListener('click', function() {
//	btn.innerHTML =
//	  (btn.innerHTML === 'Пуск') ? btn.innerHTML = 'Пауза' : btn.innerHTML = 'Пуск';})




