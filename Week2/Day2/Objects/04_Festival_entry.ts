'use strict';

let watchlist: string[] = [];
let canGoIn: any[] = [];
let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Tibi', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)

// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival

function securityCheck(queue: any[]) {
  for (let i: number = 0; i < queue.length; i++) {
    if (queue[i].guns > 0) {
      watchlist = watchlist.concat(queue[i].name);
    } else if (queue[i].alcohol >= 0) {
      securityAlcoholLoot += queue[i].alcohol;
      queue[i].alcohol = 0;
      canGoIn = canGoIn.concat(queue[i].name);
    }
  }
  console.log('They can\'t go in, because they have guns: ' + watchlist);
  console.log('Confiscated alcohol loot: ' + securityAlcoholLoot);
  console.log('Who can go in is: ' + canGoIn);
}
securityCheck(queue);