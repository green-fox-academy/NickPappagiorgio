'use strict';

// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
const fs = require('fs');
let fileName: string = 'tic-tac-toe.txt'

function ticTacResult(file: string) {
  let car: any[] = [];
  fs.readFileSync(fileName, 'utf-8').split('').forEach(e => {
    if (e === 'O') {
      car.push(0);
    } else if (e === 'X') {
      car.push(1);
    } else if (e === '') {
      car.push(8);
    }
  });

  if (car[0] + car[1] + car[2] === 0 ||
    car[3] + car[4] + car[5] === 0 ||
    car[6] + car[7] + car[8] === 0 ||
    car[0] + car[3] + car[6] === 0 ||
    car[1] + car[4] + car[7] === 0 ||
    car[2] + car[5] + car[8] === 0 ||
    car[0] + car[4] + car[8] === 0 ||
    car[2] + car[4] + car[6] === 0) {
    return 'O Win!';
  }
  else if (car[0] + car[1] + car[2] === 3 ||
    car[3] + car[4] + car[5] === 3 ||
    car[6] + car[7] + car[8] === 3 ||
    car[0] + car[3] + car[6] === 3 ||
    car[1] + car[4] + car[7] === 3 ||
    car[2] + car[5] + car[8] === 3 ||
    car[0] + car[4] + car[8] === 3 ||
    car[2] + car[4] + car[6] === 3) {
    return 'X Win!';
  }
  else {
    return 'DRAW!';
  }
}
console.log(ticTacResult(fileName));