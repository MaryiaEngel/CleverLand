'use strict';

function getRandom(min, max){
    return Math.round(Math.random() * (max - min) + min);
  }
console.log(getRandom(1,100));
