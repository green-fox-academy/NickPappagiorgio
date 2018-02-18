'use strict';

let lineCount: number = 5;
let percent: string = '%%%%%';
let space: string = '%' + '   ' + '%';
// Write a program that draws a square like this:
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
    
    if (i == 1) {
        console.log(percent);
    } else if (i > 1 && i < lineCount) {
        console.log(space);
    } else {
        console.log(percent);
    }
}