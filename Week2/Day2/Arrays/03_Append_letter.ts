'use strict';

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(newFar: string[]) {
  newFar = newFar.map(newFarA => newFarA + 'a');
  return newFar;
}

console.log(appendA(far));

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'