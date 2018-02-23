'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lines(a: number) {
  let b: number = a;
  for (let i:number = 0; i <= canvas.width; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(0, a);
    ctx.lineTo(a, canvas.height);
    ctx.stroke();
    a += b;
  }

  for (let i:number = 0; i <= canvas.width; i++) {
    a -= b;
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(canvas.width, a);
    ctx.lineTo(a, 0);
    ctx.stroke();
  }
}
console.log(lines(5));