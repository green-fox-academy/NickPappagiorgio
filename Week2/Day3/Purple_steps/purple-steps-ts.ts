'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


function squares(x: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x,x,20,20);
  ctx.strokeRect(x,x,20,20);
}

let x: number = 0;

for (let i: number = 0; i < 11; i++) {
  x += 20;
  squares(x,'yellow');
}