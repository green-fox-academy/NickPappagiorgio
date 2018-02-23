'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

//I gave the background color of the canvas at HTML.

//ctx.fillStyle = 'black';
//ctx.fillRect(0, 0, canvas.width, canvas.height);

function random(input: number) {
  let x: number = Math.floor((Math.random() * canvas.width) + 1)
  let y: number = Math.floor((Math.random() * canvas.height) + 1)
  let a: number = Math.floor((Math.random() * input) + 1)

  ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 5%, 35%)';
  ctx.fillRect(x, y, a, a);
}

for (let i: number = 0; i < Math.floor((Math.random() * 1000) + 1); i++) {
  random(3);
}