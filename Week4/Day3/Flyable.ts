'use strict';

import { Animal } from './Animals_in_the_Zoo';

interface Flyable {
  land();
  fly();
  takeOff();
}

abstract class Vehicle {
  motor: string;
  door: string;
  wheel: string;
}

class Helicopter extends Vehicle implements Flyable {
  land() {

  }
  fly() {

  }
  takeOff() {

  }
}

class Bird extends Animal implements Flyable {
  land() {

  }
  fly() {

  }
  takeOff() {

  }
}