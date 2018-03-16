'use strict';

class PirateCrews {
  protected pirateCrew: Pirate[] = [];

  add(pirate: Pirate) {
    this.pirateCrew.push(pirate);
  }
  status() {
    return this.pirateCrew.map(pirate => pirate.status()).join('\n');
  }
  howsItGoingMate() {
    return this.pirateCrew.map(pirate => pirate.howsItGoingMate()).join('\n');
  }
  drinkSomeRum(howMany: number) {
    this.pirateCrew.map((pirate, i, a) => {
      if (pirate.intoxicates > 15) {
        a.splice(i, 1);
        console.log(`R.I.P ${pirate.name}, he drank too much.`);
      } else {
        return pirate.drinkSomeRum(howMany);
      }
    })
  }
  die(name?: string) {
    this.pirateCrew.map((pirate, i, a) => {
      if (pirate.name === name) {
        a.splice(i, 1);
        console.log(`R.I.P ${pirate.name}`);
      }
    })
  }
}

class Pirate extends PirateCrews {
  name: string;
  crew: string;
  intoxicates: number;
  eyes: number;
  woodenLeg: boolean;

  constructor(name: string, crew: string, intoxicates?: number, eyes?: number, woodenLeg?: boolean) {
    super()
    this.name = name;
    this.crew = crew;
    this.intoxicates = intoxicates || 0;
    this.eyes = eyes || 2;
    this.woodenLeg = woodenLeg || false;
  }
  drinkSomeRum(howMany: number) {
    this.intoxicates += howMany;
  };
  howsItGoingMate() {
    if (this.intoxicates < 4) {
      return "Pour me anudder!";
    } else {
      return "Arghh, I'ma Pirate. How d'ya d'ink its goin?";
    }
  };
  status() {
    return `${this.name} is in the ${this.crew} crew, his intoxicate level is: ${this.intoxicates} and hi has ${this.eyes} eye(s). Is he got a woodenleg? ${this.woodenLeg ? 'Yeees :D' : 'Nooo :('}`;
  };
}

const BlackBeard: PirateCrews = new PirateCrews();
const OneEyeOnYou: PirateCrews = new PirateCrews();

BlackBeard.add(new Pirate('Miki', 'BlackBeard', 5, 1, true));
BlackBeard.add(new Pirate('Riki', 'BlackBeard', 1, 2, true));
OneEyeOnYou.add(new Pirate('Bobi', 'OneEyeOnYou', 0, 1, false))

console.log(BlackBeard.status());
console.log(OneEyeOnYou.status());
console.log(BlackBeard.howsItGoingMate());
console.log(OneEyeOnYou.howsItGoingMate());
BlackBeard.drinkSomeRum(2);
OneEyeOnYou.drinkSomeRum(5);
BlackBeard.drinkSomeRum(3);
console.log(BlackBeard.howsItGoingMate());
console.log(OneEyeOnYou.howsItGoingMate());
BlackBeard.die('Riki');
console.log(BlackBeard.status());
BlackBeard.drinkSomeRum(6);
BlackBeard.drinkSomeRum(1);