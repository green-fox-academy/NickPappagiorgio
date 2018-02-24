'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangle(x: number, y: number) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - 10, y + 15);
  ctx.lineTo(x + 10, y + 15);
  ctx.lineTo(x, y);
  ctx.stroke();
}

let x: number = 0;
let y: number = 0;
let rowNumber: number = 22;

for (let i: number = 0; i <= rowNumber; i++) {
  for (let j: number = 0; j <= rowNumber - i; j++) {
    x -= 10;
    y += 15;
    triangle(x, y);
  }
  x = canvas.width / 2 + 10 * i;
  y = 15 + (i * 15);
}