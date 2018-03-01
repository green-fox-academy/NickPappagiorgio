'use strict';

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnies(bunny: number, ears: number) {
  if (ears <= 0) { //base case
    return 0;
  }
  else {
    return bunny + bunnies(bunny, ears - 1);
  }
}
console.log(bunnies(1122, 2));