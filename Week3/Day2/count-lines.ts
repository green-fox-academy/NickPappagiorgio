'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');
let fileName: string = 'myfile.txt';

function fileLenght(name: string) {
  let fileContent = fs.readFileSync(name, 'utf-8');
  let array: any[] = fileContent.split('\n');
  return array.length;
}

try {
  console.log(fileLenght(fileName));
} catch (error) {
  console.log('zero');
}