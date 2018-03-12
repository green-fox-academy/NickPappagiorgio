'use strict';

// Create a method that decrypts duplicated-chars.txt 

const fs = require('fs');
let fileContent = fs.readFileSync('duplicated_chars.txt', 'utf-8');

function remove(input: string) {
  return input.split('').map((e, i, a) => {
    if (e === a[i + 1]) {
      a.splice(i + 1, 1);
    } return e;
  }).join('');
}
console.log(remove(fileContent))