'use strict';

// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];



function swap(input: any[], index1: number, index2: number) {
  let variable = input[index1];
  input[index1] = input[index2];
  input[index2] = variable;
  return input;
}

console.log(swap(words, 2, 5));

// Expected output: "What I cannot create I do not understand."