'use strict';

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(array):boolean {
  return (array.includes(4) && array.includes(8) && array.includes(12) && array.includes(16) && array.includes(4));
}

console.log(checkNums(listOfNumbers));