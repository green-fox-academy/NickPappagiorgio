'use strict';

class DiceSet {
  /**   You have a Dice class which has 6 dice */
  /**   You can roll all of them with roll() */
  /**   Check the current rolled numbers with getCurrent() */
  /**   You can reroll with reroll() */
  /**   Your task is to get where all dice is a 6 */
  dices: number[];
  readonly numOfDices: number = 6;

  roll(): number[] {
    this.dices = [];
    for (var i = 0; i < this.numOfDices; i++) {
      this.dices.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dices;
  }

  reroll(index?: number) {
    if (index == undefined) {
      for (var i = 0; i < this.numOfDices; i++) {
        this.dices[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dices[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index?: number) {
    if (index == undefined) {
      for (var i = 0; i < this.numOfDices; i++) {
        console.log(this.dices[i]);
      }
    } else {
      console.log(this.dices[index]);
    }
  }
}

let myDice = new DiceSet();
myDice.roll();
myDice.getCurrent();
console.log("------------------");
myDice.reroll();
myDice.getCurrent();
console.log("------------------");
myDice.getCurrent(5);
myDice.reroll();
myDice.getCurrent();
console.log("------------------");
myDice.reroll(4);
myDice.getCurrent();
console.log("------------------");

let newArray: number[] = myDice.roll();
for (let i: number = 0; i < 6; i++) {
  while (newArray[i] !== 6) {
    myDice.reroll(i);
  }
}
console.log(newArray);