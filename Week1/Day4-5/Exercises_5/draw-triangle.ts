'use strict';

let lineCount: number = 11;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
  let star: string = '';
  for (let j: number = 1; j <= i; j++)  {
    star = star + '*';
  } console.log(star);
}