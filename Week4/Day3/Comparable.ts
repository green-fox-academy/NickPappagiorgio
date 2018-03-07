'use strict'

import { Printable } from './Printable';

interface Comparable {
  compareTo(other: Comparable): number;
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */
}

class Domino implements Comparable, Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  compareTo(thing: Domino) {
    return this.values[0] - thing.values[0];
  }
  printAllFields() {
    return this.values;
  }
}

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

let completed: Domino[] = dominoes.sort(function (a: Domino, b: Domino): number {
  return a.compareTo(b);
});

console.log(completed);

// the order of your dominoes should look like this: [[1,5], [2,4], [4,6], [5,2], [6,7], [7,1]]
//let descripton: number[] = [1,5, 2,4, 4,6, 5,2, 6,7, 7,1];
class Thing implements Comparable, Printable {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }
  public complete() {
    this.completed = true;
  }

  compareTo(thing: Thing): number {
    return this.completed === thing.completed ? [this.name, thing.name].sort().indexOf(this.name) - 0.5 : this.completed ? -1 : 1;
  }
  printAllFields() {
    return this.name + this.completed;
  }
}

let toDos: Thing[] = [];
toDos.push(new Thing('Get milk'));
toDos.push(new Thing('Remove the obstacles'));
toDos.push(new Thing('Stand up'));
toDos.push(new Thing('Eat lunch'));
toDos[2].complete();
toDos[3].complete();

console.log(toDos.sort(function (a: Thing, b: Thing): number {
  return a.compareTo(b);
}));

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of toDos) {
  todo.printAllFields();
}