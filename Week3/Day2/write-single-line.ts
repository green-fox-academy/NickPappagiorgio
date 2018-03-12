'use strict';

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');
let myName: string = 'Andras Nemes';
let fileName: string = 'myfile.txt';

try {
  fs.writeFileSync(fileName, (fs.readFileSync(fileName, 'utf-8')) + '\n' + myName);
} catch (error) {
  console.log('Unable to write the file, the file is write protected!')
}