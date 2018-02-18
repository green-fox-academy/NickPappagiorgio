'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 10;

for (let i: number = 1; i <= lineCount; i++) {
    //let percent: string = '%';
    let space: string = '';
    for (let j: number = 1; j <= lineCount; j++) {
        if ((i % 2) == 0 && (j % 2) !== 0) {
        space += '%';
        } else if ((i % 2) !== 0 && (j % 2) === 0) {
        space += '%';
        }
        else if ((i % 2) === 0 && (j % 2) !== 0) {
        space += '%';
        } else 
        space += ' ';
    
} console.log(space)
}