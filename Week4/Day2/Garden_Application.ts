'use strict';

class Garden {
  plantsArray: Plant[] = [];

  collect(plant: Plant) {
    this.plantsArray.push(plant)
  }

  watering(amount: number) {
    let newPlantsArray: Plant[] = [];
    for (let i: number = 0; i < this.plantsArray.length; i++) {
      if (this.plantsArray[i].level()) {
        newPlantsArray.push(this.plantsArray[i]);
        console.log(`The ${this.plantsArray[i].color} ${this.plantsArray[i].type} needs water.`);
      } else if (!this.plantsArray[i].level()) {
        console.log(`The ${this.plantsArray[i].color} ${this.plantsArray[i].type} doesnt needs water.`);
      }
    }
    for (let i: number = 0; i < newPlantsArray.length; i++) {
      newPlantsArray[i].watering(amount / newPlantsArray.length);
    }
  }
}

class Plant {
  color: string;
  type: string;
  waterLevel: number = 0;

  constructor(color: string) {
    this.color = color;
  }

  level() { }

  watering(amount: number) { }
}

class Flower extends Plant {
  constructor(color: string) {
    super(color);
    this.type = 'flower';
  }

  level() {
    return (this.waterLevel < 5);
  }

  watering(amount: number) {
    this.waterLevel += (amount * 0.75);
  }
}

class Tree extends Plant {
  constructor(color: string) {
    super(color);
    this.type = 'tree';
  }

  level() {
    return (this.waterLevel < 10);
  }

  watering(amount: number) {
    this.waterLevel += (amount * 0.4);
  }
}

let myGarden = new Garden();
let yellow = new Flower('yellow');
myGarden.collect(yellow)
let blue = new Flower('blue');
myGarden.collect(blue)
let purple = new Tree('purple');
myGarden.collect(purple)
let orange = new Tree('orange');
myGarden.collect(orange)
console.log(myGarden.plantsArray);
myGarden.watering(40);
console.log(myGarden.plantsArray);
myGarden.watering(70);
console.log(myGarden.plantsArray);
myGarden.watering(100);