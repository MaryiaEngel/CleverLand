'use strict';

const first = document.getElementById('first');
const second = document.getElementById('second');
const div = document.getElementsByTagName('div');
const yellow = document.getElementsByClassName('yellow');


first.style.background = "red";
second.style.background = "blue";
for (let i = 0; i < yellow.length; i++) {
    yellow[i].style.backgroundColor = 'yellow';}
div[3].style.backgroundColor = "green";
