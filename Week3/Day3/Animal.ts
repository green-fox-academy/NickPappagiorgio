'use strict';

class Animal {
  private hunger: number;
  private thirst: number;
  
  constructor(eat?: number, drink?: number) {
    this.hunger = eat || 50;
    this.thirst = drink || 50;
  }

  eat() {
    this.hunger--;
  }

  drink() {
    this.thirst--;
  }

  play() {
    this.hunger++;
    this.thirst++;
  }
  get print() {
    return zebra;
  }

}

let zebra = new Animal (11, 22);
zebra.eat();
zebra.eat();
zebra.drink();
console.log(zebra.print);