'use strict';

let month = prompt('Введите число месяца?');
switch (month){
  case '12':
  case '1':
  case '2':
    console.log("This is Winter");
    break;
  case '3':
  case '4':
  case '5':
    console.log("This is Spring");
    break;
  case '6':
  case '7':
  case '8':
    console.log("This is Summer");
    break;
  case '9':
  case '10':
  case '11':
    console.log("This is Fall");
    break;
  default:
    console.log('Wrong Number!Please double check your answer!')
}
