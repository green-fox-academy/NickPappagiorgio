'use strict';

//Create a Counter class
//which has an integer property
//when creating it should have a default value 0 or we can specify it when creating
//we can add(number) to increase the counter's value by a whole number
//or we can add() without parameters just increasing the counter's value by one
//and we can get() the current value as string
//also we can reset() the value to the initial value

class Counter {
  private integer: number;
  private initialValue: number;

  constructor(number?: number) {
    this.integer = number || 0;
    this.initialValue = number || 0;
  }

  add(number: number) {
    this.integer += Math.floor(number) || 1;
  }

  getValue() {
    return this.integer.toString();
  }

  initial() {
    this.integer = this.initialValue;
  }
}

let number = new Counter(11);
console.log(number.getValue());
number.add(11);
console.log(number.getValue());
number.initial();
console.log(number.getValue());