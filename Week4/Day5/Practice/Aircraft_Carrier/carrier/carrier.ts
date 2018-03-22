'use strict';

import { Aircraft } from "../aircrafts/aircrafts";
import { F16 } from "../aircrafts/f16";
import { F35 } from "../aircrafts/f35";

export class Carrier {
  aircraftsStore: Aircraft[] = [];
  ammoStore: number;
  healthPoint: number;

  constructor(fillUpTheCarrierWithAmmo: number, carrierHealth: number) {
    this.ammoStore = fillUpTheCarrierWithAmmo;
    this.healthPoint = carrierHealth;
  }

  add(newAircraft: Aircraft) {
    this.aircraftsStore.push(newAircraft);
  }

  fill() {
    if (this.ammoStore === 0) {
      throw 'Out of ammo';
    }

    try {
      this.aircraftsStore.filter(e => e.isPriority).forEach(e => { this.ammoStore = e.refill(this.ammoStore) });
      this.aircraftsStore.forEach(e => { this.ammoStore = e.refill(this.ammoStore) });
    }

    catch (error) {
      console.log(error);
    }
  }

  fight(anotherCarrier: Carrier) {
    let totalDamage = 0;
    this.aircraftsStore.forEach(e => totalDamage += e.maxAmmo * e.baseDamage);
    return anotherCarrier.healthPoint - totalDamage;
  }

  getStatus() {
    let totalDamage = 0;
    this.aircraftsStore.forEach(e => totalDamage += e.maxAmmo * e.baseDamage);
    return `HP: ${this.healthPoint}, Aircraft count: ${this.aircraftsStore.length}, Ammo Storage: ${this.ammoStore}, Total damage: ${totalDamage}`;
  }
}

let carrierOne = new Carrier(2300, 5000);
let carrierTwo = new Carrier(2300, 5000);
carrierOne.add(new F35);
carrierOne.add(new F35);
carrierOne.add(new F16);
carrierTwo.add(new F16);
carrierTwo.add(new F16);
carrierTwo.add(new F35);
console.log(carrierOne.getStatus());
console.log(carrierTwo.getStatus());
console.log(carrierOne.fight(carrierTwo));
console.log(carrierOne.getStatus());
console.log(carrierTwo.getStatus());