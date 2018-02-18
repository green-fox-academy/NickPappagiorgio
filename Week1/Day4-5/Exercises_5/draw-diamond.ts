'use strict';

let lineCount: number = 7;
let star: string = '*'
let space: string = ' '
// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount - 3; i++) {
    space = ' ';
    for (let j: number = 1; j <= (lineCount - 3 - i); j++){
        space = space + ' ';
    }
    console.log(space + star);
    star = '*' + star + '*';
}

for (let i: number = 1; i <= lineCount - 4; i++) {
    space = ' ';
    for (let j: number = 1; j <= (i); j++){
        space = space + ' ';
    }
    star = '*';
    for (let j: number = 1; j <= (lineCount - i - 4); j++){
        star = '*' + star + '*';
    }
    console.log(space + star);
}