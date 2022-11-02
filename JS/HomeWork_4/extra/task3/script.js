'use strict';

let question = prompt("Enter the day of the week");
if(question == 'Monday' || question == 'monday'){
    for(let i = 1; i < 30; i+=7){
        console.log(i)}
}
else if(question == 'Tuesday' || question == 'tuesday'){
    for(let i = 2; i < 30; i+=7){
        console.log(i)}
}
else if(question == 'Wednesday' || question == 'wednesday'){
    for(let i = 3; i < 30; i+=7){
        console.log(i)}
}
else if(question == 'Thursday'|| question == 'thursday'){
    for(let i = 4; i < 30; i+=7){
        console.log(i)}
}
else if(question == 'Friday' || question == 'friday'){
    for(let i = 5; i < 30; i+=7){
        console.log(i)}
}
else if(question == 'Saturday' || question == 'saturday'){
    for(let i = 6; i < 30; i+=7){
        console.log(i)}
}
else if(question == 'Sunday' || question == 'sunday'){
    for(let i = 7; i < 30; i+=7){
        console.log(i)}
}
else{
    console.log("Error, wrong input")
}
