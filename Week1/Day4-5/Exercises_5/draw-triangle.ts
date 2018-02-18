'use strict';

let lineCount: number = 4;
let i: number = 1
let star: string = '*'

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

while (i <= lineCount) {
    console.log(star);
    star = star + '*';
    i++;
}