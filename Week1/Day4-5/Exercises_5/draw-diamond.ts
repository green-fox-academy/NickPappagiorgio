'use strict';

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

let lineCount: number = 7;
let star: string = '*'
let space: string = ' '

if ((lineCount % 2) == 0) {
    console.log('Please try again with an odd number!');
} else {
    for (let i: number = 0; i <= (lineCount / 2); i++) {
        space = ' ';
        for ( let j : number = 1; j <= (lineCount / 2) - i; j++) {
            space += ' ';
        }
        console.log(space + star);
        star = '*' + star + '*';
    }


    for (let i: number = 1; i <= (lineCount / 2); i++) {
        star = '*';
        for ( let j : number = 1; j <= (lineCount / 2) - i; j++) {
         star = '*' + star + '*';
        }
        console.log(space + ' ' + star);
        space += ' ';
    }
}