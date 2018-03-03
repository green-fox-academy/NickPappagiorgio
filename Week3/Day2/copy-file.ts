'use strict';

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');
let fileOne: string = 'from.txt';
let fileTwo: string = 'to.txt';


function copy(from: string, to: string) {
  try {
    fs.writeFileSync(to, (fs.readFileSync(from, 'utf-8')));
    return true;
  } catch (error) {
    return false;
  }
}
console.log(copy(fileOne, fileTwo));