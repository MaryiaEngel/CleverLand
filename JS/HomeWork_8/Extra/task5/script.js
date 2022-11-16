'use strict';

let email = prompt("Введите адрес эдектронной почты:");
if(email.includes('@') && email.includes('.')){
    console.log('true')
}