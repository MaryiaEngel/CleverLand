'use strict';

const first = document.getElementById("red");
for(let i = 0; i < first.rows.length;i++){
    first.rows[i].cells[i].style.backgroundColor = 'red';
    first.rows[i].cells[first.rows.length-1-i].style.backgroundColor = 'red';
}
