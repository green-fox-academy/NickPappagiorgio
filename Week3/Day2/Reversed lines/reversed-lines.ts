'use strict';

// Create a method that decrypts reversed-lines.txt


////////////////////////////////// VERSION 1.0
const fs = require('fs');
let fileContent = fs.readFileSync('reversed-lines.txt', 'utf-8');

function reverse1(input: string) {
  let splittedInputByEnter: any[] = input.split('\n');
  let splittedInputByWord: any[] = splittedInputByEnter.map(row => row.split('').reverse().join(''));
  return splittedInputByWord.join('\n');
}

console.log(reverse1(fileContent));


////////////////////////////////// VERSION 2.0
function reverse2(fileName: string) {
  return fs.readFileSync(fileName, 'utf-8').split('\n').map(row => row.split('').reverse().join('')).join('\n');
}

console.log(reverse2('reversed-lines.txt'));