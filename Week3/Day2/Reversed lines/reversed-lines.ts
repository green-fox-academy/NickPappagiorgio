'use strict';

// Create a method that decrypts reversed-lines.txt


const fs = require('fs');
let fileContent = fs.readFileSync('reversed-lines.txt', 'utf-8');

function reverse1(input: string) {
  let splittedInputByEnter: any[] = input.split('\n');
  let splittedInputByWord: any[] = splittedInputByEnter.map(row => row.split('').reverse().join(''));
  return splittedInputByWord.join('\n');
}

console.log(reverse1(fileContent));