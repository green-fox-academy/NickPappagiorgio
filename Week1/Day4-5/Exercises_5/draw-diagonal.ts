'use strict';

let lineCount: number = 6;
// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
    let percent: string = '%';
    for (let j: number = 1;j < lineCount; j++) {
       if (i == 1 || i == lineCount) {
           percent += '%';
       } else if (j == lineCount - 1 || j == i - 1) {
           percent += '%';
       } else {
        percent += ' ';
       }
    } console.log(percent);
}