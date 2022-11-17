'use strict';

let email = prompt("Введите адрес эдектронной почты:");
let sign = email.split('@');
let signCount = sign.length-1;
let dot = email.split('.');
let dotCount = dot.length-1;
if(email.includes('@') && email.includes('.')){
    let checkEmail = function(){
        if(signCount > 1){
            console.log('Адрес электронной почты имеет некорректный формат!');}
        else if(email.indexOf('@') == [0]){
                console.log('Адрес электронной почты имеет некорректный формат!');}
        else if(email.includes('!','?',':','$','&','/',';','#','*')){
            console.log('Адрес электронной почты имеет некорректный формат!')}
        else if(dotCount = 1){
            if(email.indexOf('.') - email.indexOf('@') < 2){
                console.log('Адрес электронной почты имеет некорректный формат!')}
            else if(email.length-1 - email.indexOf('.') <= 1){
                console.log('Адрес электронной почты имеет некорректный формат!')}
            else{
                console.log(email.slice(email.indexOf('@')));}}
        else{
            console.log(email.slice(email.indexOf('@')));}}
    checkEmail();}
else{
    console.log('Адрес электронной почты имеет некорректный формат!')} ;