'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function fileName(name: string) {
  let array: any[] = name.split('\n');
  return array.length;
}

try {
  const fs = require('fs');
  let fileContent = fs.readFileSync('myfile.txt', 'utf-8');
  console.log(fileName('myfile.txt'));
}

catch (error) {
  console.log('Nyazsgem!');
}