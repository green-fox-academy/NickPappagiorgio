'use strict';

class Sharpie {
  color: string;
  width: number;
  inkAmmount: number = 100;

  constructor(colorIn, widthIn) {
    this.color = colorIn;
    this.width = widthIn;
  }

  use(decreas) {
    this.inkAmmount - decreas;
  }
}

let blue = new Sharpie('blue', 11);
blue.use(11);
console.log(blue.inkAmmount);