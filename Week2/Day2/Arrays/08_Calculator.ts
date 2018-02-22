'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.
// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:
// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)
// You should use the command line arguments to accept user input
// It should work like this:
// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye
//const args = process.argv.splice(2); // Just a helper for you to get started


function calculator(operation: string, operand1: number, operand2: number) {
  let output: number = 0;
  if (operation === '+') {
    output = operand1 + operand2;
  } else if (operation === '-') {
    output = operand1 - operand2;
  } else if (operation === '*') {
    output = operand1 * operand2;
  } else if (operation === '/') {
    output = operand1 / operand2;
  } else if (operation === '%') {
    output = operand1 % operand2;
  } return output;
}

console.log(calculator('+', 3, 5));
console.log(calculator('-', 3, 5));
console.log(calculator('*', 3, 5));
console.log(calculator('/', 3, 5));
console.log(calculator('%', 3, 5));