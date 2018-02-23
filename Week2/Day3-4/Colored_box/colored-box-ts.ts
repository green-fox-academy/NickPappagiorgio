'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.


ctx.beginPath();
ctx.moveTo(250,150);
ctx.strokeStyle = 'red';
ctx.lineTo(250,250);
ctx.stroke();
ctx.beginPath();
ctx.lineTo(250,250);
ctx.strokeStyle = 'green';
ctx.lineTo(350,250);
ctx.stroke();
ctx.beginPath();
ctx.lineTo(350,250);
ctx.strokeStyle = 'purple';
ctx.lineTo(350,150);
ctx.stroke();
ctx.beginPath();
ctx.lineTo(350,150);
ctx.strokeStyle = 'yellow';
ctx.lineTo(250,150);
ctx.stroke();