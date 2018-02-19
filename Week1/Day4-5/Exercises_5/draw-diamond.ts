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
/*
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
*/

let lineCount: number = 14;
let brush: string = "*"; // Paintbrush
//Calculation and stuffZ
let lineCountTop: number = Math.ceil(lineCount/2);
let lineCountBot: number = lineCountTop -1;
let space: string = " ";
let draw: string = '';
//TOP HALF
for (let a: number = 0; a < lineCountTop; a++) {
    draw = '';
    for (let b: number = 1; b < lineCountTop-a; b++) {
      draw = draw + space;
    }
    for (let c: number = 1; c <= (2*a+1); c++) {
        draw = draw + brush ;
    }
    console.log (draw);
}
//Rubbish for even lines
   if (lineCount % 2 ==0){
        console.log (draw);
    }
//BOTTOM HALF
space = " ";

for (let a: number = lineCountBot; a > 0; a--) {
    draw = ' ';
    for (let b: number = lineCountBot - a; b > 0; b--) {
        draw = space + draw;}
    for (let c: number = (2*a-1); c >= 1; c--) {
        draw = draw + brush;
    }
    console.log (draw);
}