'use strict';

// Create a function that prints the multiplication table of a given base number.
// It should take the base number as a parameter and prints the output to the
// console.
// The output should look like this for 5 as base:
//  1 * 5 = 5
//  2 * 5 = 10
//  3 * 5 = 15
//  4 * 5 = 20
//  5 * 5 = 25
//  6 * 5 = 30
//  7 * 5 = 35
//  8 * 5 = 40
//  9 * 5 = 45
//  10 * 5 = 50

function multiply(numberWith: number, numberWhat: number) {
  for (let i: number = 1; i <= numberWith; i++) {
    console.log(`${i} * ${numberWhat} = ${(i * numberWhat)}`)
  }
}
multiply(10, 5);