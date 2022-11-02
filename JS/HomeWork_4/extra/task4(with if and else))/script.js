'use strict';

let Data = new Date();
let hour = Data.getHours();
let minute = Data.getMinutes();
let sec = Data.getSeconds();
let name = prompt("What is your name?");
if( hour > 5 && hour < 12){
      console.log(`Good morning, ${name} !`);
} else if (hour > 11 && hour < 18){
      console.log(`Good afternoon, ${name} !`);
} else if (hour > 17 && hour < 21){
      console.log(`Good evening, ${name} !` );
} else if(hour > 20 && hour < 24){
      console.log(`Good night, ${name} !` );
} else if(hour > 2 && hour < 6){
      console.log(`Why are you up so early, ${name} ?` );
} else{
      console.log(`Why are you up so late, ${name} ?` );
}

