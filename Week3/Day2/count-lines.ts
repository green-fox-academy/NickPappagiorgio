'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

try {
  const fs = require('fs');
  let fileContent = fs.readFileSync('froms.txt', 'utf-8');

  function fileName(name: string) {
    let array: string[] = name.split('\n');
    return array.length;
  } console.log(fileName(fileContent));
} catch (error) {
  console.log('zero');
}