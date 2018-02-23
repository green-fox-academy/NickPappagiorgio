'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function draw(xStart: number, yStart: number, xTo: number, yTo: number,) {
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xTo, yTo);
  ctx.stroke();
}

  function lines(a: number) {
    let b: number = a;
    ctx.strokeStyle = 'blue';
    for (let i: number = 0; i < canvas.width; i++) {
      draw(0, a, a, canvas.height);
      a += b;
    }

    ctx.strokeStyle = 'red';
    for (let i: number = 0; i < canvas.width; i++) {
      a -= b;
      draw(canvas.width, a, a, 0);
    }
  }
  lines(10);





/*
// VERSION 1.0

'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lines(a: number) {
  let b: number = a;
  ctx.strokeStyle = 'blue';
  for (let i:number = 0; i < canvas.width; i++) {
    ctx.beginPath();
    ctx.moveTo(0, a);
    ctx.lineTo(a, canvas.height);
    ctx.stroke();
    a += b;
  }

  ctx.strokeStyle = 'red';
  for (let i:number = 0; i < canvas.width; i++) {
    a -= b;
    ctx.beginPath();
    ctx.moveTo(canvas.width, a);
    ctx.lineTo(a, 0);
    ctx.stroke();
  }
}
lines(5);
*/