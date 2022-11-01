'use strict';

let Data = new Date();
let hour = Data.getHours();
let minute = Data.getMinutes();
let sec = Data.getSeconds();
let name = prompt("What is your name?");
switch (hour){
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      console.log(`Good morning, ${name} !`);
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      console.log(`Good afternoon, ${name} !`);
      break;
    case 18:
    case 19:
    case 20:
      console.log(`Good evening, ${name} !` );
      break;
    case 21:
    case 22:
    case 23:
      console.log(`Good night, ${name} !` );
      break;
    case 24:
    case 1:
    case 2:
      console.log(`Why are you up so late, ${name} ?` );
      break;
    case 3:
    case 4:
    case 5:
      console.log(`Why are you up so early, ${name} ?` );
      break;
  }
