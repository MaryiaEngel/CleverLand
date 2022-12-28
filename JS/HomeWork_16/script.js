'use strict';

//1
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.transmission = 'automatic';
}

const audi = new Car('Audi', 'A4');
const bmw = new Car('BMW', 'X5');
const nissan = new Car('Nissan', 'Pathfinder');
const kia = new Car('Kia', 'Sorento');
const mercedes = new Car('Mercedes-Benz', 'GLA 250');

Car.prototype.color = function(){
    console.log(`${this.make} comes in a "Black" color`)
};

console.log(audi, bmw, nissan, kia, mercedes)

audi.color(); 
mercedes.color();


//2
function greetName (lastname) {
   console.log(this);
   console.log(this.name + ' ' + lastname);
 }
 const user = {
   name: 'Maryia',
 };

greetName.call(user, 'Engel');
greetName.apply(user, ['Engel']);


//3
const fruit= {
    fruitName: "Apple"
  };
  
  function add(color) {
    console.log(color + ' ' + this.fruitName);
  }
  
  const addFruit = add.bind(fruit);
  
  addFruit("Green");