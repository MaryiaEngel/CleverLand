'use strict';
let question = prompt("Введите число от 100 до 999");
let hundreds;
let subDozens;
let dozens;
let units;
switch (Math.floor(question / 100)) {
    case 1:
        hundreds = 'Сто';
        break
    case 2:
        hundreds = 'Двести ';
        break
    case 3:
        hundreds = 'Триста ';
        break
    case 4:
        hundreds = 'Четыреста ';
        break
    case 5:
        hundreds = 'Пятьсот ';
        break
    case 6:
        hundreds = 'Шестьсот ';
        break
    case 7:
        hundreds = 'Семьсот ';
        break
    case 8:
        hundreds = 'Восемьсот ';
        break
    case 9:
        hundreds = 'Девятьсот ';
        break
}

switch (question % 100) {
    case 10:
        subDozens = 'десять ';
        break
    case 11:
        subDozens = 'одиннадцать';
        break
    case 12:
        subDozens = 'двенадцать ';
        break
    case 13:
        subDozens = 'тринадцать ';
        break
    case 14:
        subDozens = 'четырнадцать';
        break
    case 15:
        subDozens = 'пятнадцать ';
        break
    case 16:
        subDozens = 'шестнадцать ';
        break
    case 17:
        subDozens = 'семнадцать ';
        break
    case 18:
        subDozens = 'восемнадцать ';
        break
    case 19:
        subDozens = 'девятнадцать ';
        break
    default:
        subDozens = '';
}
switch ((question % 100) - ((question % 100) % 10)) {
    case 20:
        dozens = 'двадцать ';
        break
    case 30:
        dozens = 'тридцать ';
        break
    case 40:
        dozens = 'сорок ';
        break
    case 50:
        dozens = 'пятьдесят ';
        break
    case 60:
        dozens = 'шестьдесят ';
        break
    case 70:
        dozens = 'семьдесят ';
        break
    case 80:
        dozens = 'восемьдесят ';
        break
    case 90:
        dozens = 'девяносто ';
        break
    default:
        dozens = '';
}
switch ((question % 100) % 10) {
    case 1:
        units = 'один';
        break
    case 2:
        units = 'два';
        break
    case 3:
        units = 'три';
        break
    case 4:
        units = 'четыре';
        break
    case 5:
        units = 'пять';
        break
    case 6:
        units = 'шесть';
        break
    case 7:
        units = 'семь';
        break
    case 8:
        units = 'восемь';
        break
    case 9:
        units = 'девять';
        break
    default:
        units = '';
}
alert(`${hundreds} ${dozens || subDozens} ${subDozens ? '' : units}`)
