'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

function containsSeven(num1: any[]) {
  let answare: string = "Noooooo"
  num1.forEach(function(item) {
    if (item === 7) {
      answare = "Hoorray";
    }
  })
  return answare;
  
}

console.log(containsSeven(numbers));