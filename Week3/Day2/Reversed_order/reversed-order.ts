'use strict';

// Create a method that decrypts reversed-order.txt

const fs = require('fs');

function reverse(fileName) {
  let fileContent: string = fs.readFileSync(fileName, 'utf-8');
  return fileContent.split('\n').reverse().join('\n');
}



console.log(reverse('reversed-order.txt'));