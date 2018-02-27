'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function takes(number: number) {
  if (number === 0) {
    return 'fail';
  }
  return (10 / number);
} console.log(takes(0));