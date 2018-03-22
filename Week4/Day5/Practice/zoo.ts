'use strict';

abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  breed() {
  }
}

abstract class Breed extends Animal {
  breed() {
    return 'laying eggs.';
  }
}

class Mammal extends Animal {
  breed() {
    return 'pushing miniature versions out.';
  }
}

class Reptile extends Animal { 
}

class Bird extends Animal {
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());