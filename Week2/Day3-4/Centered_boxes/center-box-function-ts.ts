'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let colors: string[] = ['blue', 'red', 'green']

function square(x: number, color: string) {
  ctx.strokeStyle = color;
  ctx.strokeRect(300 - (x / 2), 200 - (x / 2), x, x);
}

let x: number = 400;

colors.forEach(function(AColor){
  square(x,AColor);
  x -= 50;
})