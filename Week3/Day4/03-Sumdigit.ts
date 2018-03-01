'use strict';

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).



function hhh(n: number) {
  if (n < 10) { //base case
    return n;
  } else {
    return (n % 10) + hhh(Math.floor(n / 10));
  }
}

console.log(hhh(1));
console.log(hhh(2));
console.log(hhh(3));
console.log(hhh(10));
console.log(hhh(128));


/*
console.log(126 % 10);
console.log(Math.floor(126 / 10) % 10);
console.log(Math.floor(126 / 10 / 10));
*/