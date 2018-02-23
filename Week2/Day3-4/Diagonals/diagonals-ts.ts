'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.


ctx.beginPath();
ctx.moveTo(50,50);
ctx.strokeRect(50,50,50,50);
ctx.beginPath();
ctx.lineTo(50,50);
ctx.lineTo(100,100);
ctx.strokeStyle = 'red';
ctx.stroke();