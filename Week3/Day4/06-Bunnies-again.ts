'use strict';

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnies2(n: number) {
  if (n <= 0) { //base case
    return 0;
  } else if (n % 2 === 0) {
    return (n / n) * 3 + bunnies2(n - 1);
  } else if (n % 2 !== 0) {
    return (n / n) * 2 + bunnies2(n - 1);
  }
}
console.log(bunnies2(5)); // Result: 12
console.log(bunnies2(6));
console.log(bunnies2(7));
console.log(bunnies2(8));
console.log(bunnies2(9));
console.log(bunnies2(10));
console.log(bunnies2(11));
console.log(bunnies2(12));
console.log(bunnies2(13));
console.log(bunnies2(14));