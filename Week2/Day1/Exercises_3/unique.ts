'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once


function unique(arr) {
  let tempArr: number[] = [];
  tempArr = arr.sort();
  for (let i: number = 0; i <= tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      tempArr.splice(i, 1);
    }
  } return tempArr;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`