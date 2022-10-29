'use strict';

let photoQuantity = prompt("Количество фото в галерее?");
photoQuantity = Number(photoQuantity);
let photoWidth = prompt("Какова ширина одного фото?");
photoWidth = Number(photoWidth);
let photoWidthSpace = 5*2 + photoWidth;
let photoWidthAfter = (1024 - ((5*2)*4)) / 4;
let rowQuantity = Math.floor(1024 / photoWidthSpace);
let Row = Math.floor(photoQuantity / rowQuantity);
let lastRow = photoQuantity % rowQuantity;
alert(`Максимальная ширина фото:${photoWidthSpace}`);
alert(`Количество фото в каждом ряду:${rowQuantity}`);
alert(`Количество полных рядов:${Row}`);
alert(`Количество фото в последнем ряду:${lastRow}`);