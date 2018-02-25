'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

ctx.fillStyle = 'purple';
function fourSquare(x: number, y: number, width: number, height: number) {

  ctx.fillRect(x, y, width, height);
  ctx.stroke();
}
let x: number = 11;
let y: number = 11;
let width: number = 10;
let heigth: number = 10;

for (let i: number = 0; i < 7; i++) { 
  x += x / 2;
  y += y / 2;
  width = x / 2;
  heigth = y / 2;
  fourSquare(x,y,width,heigth);
}