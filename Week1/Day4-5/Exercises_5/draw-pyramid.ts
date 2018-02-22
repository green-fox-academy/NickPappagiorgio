'use strict';

let lineCount: number = 11;
let star: string = '*'
let space: string = ' '

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
  space = ' ';
  for (let j: number = 1; j <= (lineCount - i); j++) {
    space += ' ';
  }
  console.log(space + star);
  star = '*' + star + '*';
}