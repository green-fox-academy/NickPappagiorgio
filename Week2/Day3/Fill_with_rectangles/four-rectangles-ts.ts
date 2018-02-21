'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

function fourSquare(x: number, y: number, width: number, height: number) {
  ctx.fillStyle = 'red';
  ctx.fillRect(x, y, width, height);
  ctx.stroke();
}
let x: number = 10;
let y: number = 10;
let width: number = 10;
let heigth: number = 10;

for (let i: number = 0; i < 4; i++) { 
  x += x;
  y += y;
  width *= 2;
  heigth *= 2;
  fourSquare(x,y,width,heigth);
}