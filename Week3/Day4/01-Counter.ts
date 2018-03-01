'use strict';

// Write a recursive function that takes one parameter: n and counts down from n.

function countDown(num: number) {
  if (num <= 1) { //base case
    console.log(1);
  }
  else {
    console.log(num);
    countDown(num-1);
  }
}
countDown(10);