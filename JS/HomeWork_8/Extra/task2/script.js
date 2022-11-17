
'use strict';

let question = prompt("Введите предложение:");
function check(interrogative , exclamatory, narrative) {
    if (question.endsWith("?")) interrogative();
    else if (question.endsWith("!")) exclamatory();
    else if (question.endsWith(".")) narrative();}
check(
    function(){
        console.log("Это предложение вопросительное. ");        
    },
    function () {
        console.log("Это предложение восклицательное.");
    },
    function(){
        console.log("Это предложение повествовательное. ");});