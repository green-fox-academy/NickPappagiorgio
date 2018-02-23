'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.


function createCell(x: number, y: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cellWidth, cellWidth);
}

let x: number = 0;
let y: number = 0;
let cellWidth: number = canvas.width / 10;


for (let i: number = 0; i < 10; i++) {
  x = 0;
  for (let j: number = 0; j < 10; j++) {
    if (j % 2 === 0 && i % 2 === 0) {
      createCell(x, y, 'black');
    } else if (j % 2 !== 0 && i % 2 !== 0) {
      createCell(x, y, 'black');
    } else {
      createCell(x, y, 'red');
    }
    x += cellWidth;
  }
  y += cellWidth;
}