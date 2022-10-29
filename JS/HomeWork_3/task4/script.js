'use strict';

let photoQuantity = prompt("Количество фото в галерее?");
photoQuantity = Number(photoQuantity);
let photoWidth = prompt("Какова ширина одного фото?");
photoWidth = Number(photoWidth);
let photoWidthAfter = (1024 - ((5*2)*4)) / 4;
let rowQuantity = Math.floor(1024 / photoWidthAfter);
let Row = Math.floor(photoQuantity / rowQuantity);
let photoQuantityLastRow = photoQuantity % rowQuantity;
alert(`Максимально допустимая ширина фото: ${photoWidthAfter} \nКоличество фото в каждом ряду: ${rowQuantity} \nКоличество полных рядов: ${Row} \nКоличество фото в последнем ряду: ${photoQuantityLastRow}`);
