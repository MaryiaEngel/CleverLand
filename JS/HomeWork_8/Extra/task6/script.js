'use strict';

let word = prompt("Введите слово:");
let first = word.charAt(0);
let last = word.charAt(word.length-1);
let second = word.charAt(1);
let penultimate = word.charAt(word.length-2);
function checkWord( yes, no) {
    if (first === last && second === penultimate) yes();
    else no();}
checkWord(
    function () {
        console.log('True');},
    function () {
        console.log('False');}
);//Не совсем практичный вариант,но рабочий(в моем случае,если слово состоит не более чем из 5 букв)

'use strict';

let text = prompt("Введите слово:");
function checkText(){
    let result = "";
    for(let i = text.length -1; i>=0; i--){
        result += text[i];
    }
    return result;
}
function checkResult(){
    if(text === checkText()){
        return True;
    }
    else{
        return False;
    }
}
console.log(checkResult());

