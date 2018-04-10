const Animal = function () {
  this.hunger = 5;
  this.thirst = 5;

  this.eat = function () {
    this.hunger--;
  };

  this.drink = function () {
    this.thirst--;
  };

  this.play = function () {
    this.hunger++;
    this.thirst++;
  }
}

const Farm = function (slots) {
  this.animals = [];
  this.slots = slots;
  const emptySlots = this.slots - this.animals.length;

  this.breed = function () {
    if (this.animals.length <= this.slots) {
      this.animals.push(new Animal());
    }
  }

  this.breedMore = function (howMuch) {
    if (howMuch <= emptySlots) {
      for (let i = 0; i < howMuch; i++) {
        this.breed();
      }
    } else if (howMuch >= emptySlots) {
      for (let i = 0; i < emptySlots; i++) {
        this.breed();
      }
    }
  }

  this.slaughter = function () {
    SheepFarm.animals.sort(function (a, b) {
      return parseFloat(a.hunger) - parseFloat(b.hunger)
    }).splice(0, 1);
    return SheepFarm.animals;
  }

  this.total = function () {
    return `The farm has ${this.animals.length} living animals we are bankrupt.`;
  }

  this.prints = function () {
    if (this.animals.length <= 0) {
      return `The farm has ${this.animals.length} sheep, we are bankrupt.`
    } else if (this.animals.length < this.slots) {
      return `The farm has ${this.animals.length} sheep, we are okay.`
    } else {
      return `The farm has ${this.animals.length} sheep, we are full.`
    }
  }

  this.progress = function () {
    this.animals.forEach(e => {
      if (Math.random() >= 0.5) {
        switch (Math.floor(Math.random() * 2)) {
          case 0:
            e.eat();
            break;

          case 1:
            e.drink();
            break;

          case 2:
            e.play();
            break;
        }
      }
    });
    this.breed();
    this.slaughter();
  }
}

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(9);
SheepFarm.breedMore(6);
SheepFarm.progress();
SheepFarm.progress();
SheepFarm.progress();
SheepFarm.progress();
SheepFarm.progress();
SheepFarm.progress();
SheepFarm.progress();
console.log(SheepFarm.animals); // Should log 20 Animal objects
console.log(SheepFarm.prints());
// const button = document.querySelector('button');

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  -  The farm has 20 living animals, we are full
