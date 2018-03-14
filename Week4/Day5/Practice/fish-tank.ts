'use strict';

// There are 3 kind of fishes:
// - Clownfish, gains 1 gramm when feeded and has stripe color.
// - Tang, gains 1 gramms when feeded and can suffer short-term memory loss.
// - Koi, gains 2 gramms when feeded.

// Each fish has a name, weight, color and has a status and feed method.

// Create an aquarium and take care of your fishes.

// Create a method on the aquarium that feeds all the fishes in the aquarium:
// increases the weight of every fish with the amount of gramms they gain when feeded.

// Create a method on the aquarium that removes the big fishes.
// A big fish's weight is at least 11 gramms.

// The aquarium has a status method it should print the status for each fish.

class Aquarium {
  fishArray: Fish[] = [];
  add(fish: Fish) {
    this.fishArray.push(fish);
  }
  feed() {
    this.fishArray.forEach(fish => { fish.gain() });
  }
  removeOversizedFishes() {
    this.fishArray.forEach((fish, i) => {
      if (fish.weights >= 11) {
        this.fishArray.splice(i, 1)
      }
    });
  }
  status() {
    return this.fishArray.map(fish => fish.status()).join('\n');
  }
}

abstract class Fish {
  name: string;
  weights: number;
  color: string;

  constructor(name: string, weights: number, color: string) {
    this.name = name;
    this.weights = weights;
    this.color = color;
  }

  abstract gain();
  abstract status();
}

class Clownfish extends Fish {
  secondColor: string;

  constructor(name: string, weights: number, color: string, secondColor: string) {
    super(name, weights, color);
    this.secondColor = secondColor;
  }
  gain() {
    return this.weights++;
  }
  status() {
    return `${this.name}, weight: ${this.weights}, color: ${this.color}, stripe color: ${this.secondColor}`;
  }
}

class Tang extends Fish {
  memory: boolean;

  constructor(name: string, weights: number, color: string, memory: boolean) {
    super(name, weights, color);
    this.memory = memory;
  }
  gain() {
    return this.weights++;
  }
  status() {
    return `${this.name}, weight: ${this.weights}, color: ${this.color},  short-term memory loss: ${this.memory}`;
  }
}

class Koi extends Fish {
  constructor(name: string, weights: number, color: string) {
    super(name, weights, color);
  }
  gain() {
    return this.weights += 2;
  }
  status() {
    return `${this.name}, weight: ${this.weights}, color: ${this.color}`;
  }
}



const aquarium: Aquarium = new Aquarium();

aquarium.add(new Koi('Nami', 9, 'pink'));
aquarium.add(new Tang('Dory', 8, 'blue', true));
aquarium.add(new Tang('Bubbles', 10, 'yellow', false));
aquarium.add(new Clownfish('Nemo', 5, 'orange', 'white'));

console.log(aquarium.status());

// Nami, weight: 9, color: pink
// Dory, weight: 8, color: blue, short-term memory loss: true
// Bubbles, weight: 10, color: yellow, short-term memory loss: false
// Nemo, weight: 5, color: orange, stripe color: white
aquarium.feed();
aquarium.removeOversizedFishes();

console.log(aquarium.status());

// Dory, weight: 9, color: blue, short-term memory loss: true
// Nemo, weight: 6, color: orange, stripe color: white