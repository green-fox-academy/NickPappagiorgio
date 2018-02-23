'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawline(b: number, c: number, d: number, e: number) {
  ctx.beginPath();
  ctx.moveTo(b, c);
  ctx.lineTo(d, e);
  ctx.stroke();
} 

function lines(a: number) {
  let b: number = a;
  a = 0;
  ctx.strokeStyle = 'blue';
  for (let i: number = 0; i <= canvas.width / (b * 2); i++) {
    drawline(canvas.width / 2, a, canvas.width / 2 - a, canvas.height / 2);
    a += b;
  }

  a = 0;
  ctx.strokeStyle = 'red';
  for (let i: number = 0; i <= canvas.width / (b * 2); i++) {
    drawline(canvas.width / 2, a, canvas.width / 2 + a, canvas.height / 2);
    a += b;
  }

  a = 0;
  ctx.strokeStyle = 'green';  
  for (let i: number = 0; i <= canvas.width / (b * 2); i++) {
    drawline(canvas.width / 2, canvas.height - a, canvas.width / 2 - a, canvas.height / 2);
    a += b;
  }

  a = 0;
  ctx.strokeStyle = 'black';
  for (let i: number = 0; i <= canvas.width / (b * 2); i++) {
    drawline(canvas.width / 2, canvas.height - a, canvas.width / 2 + a, canvas.height / 2);
    a += b;
  }
}
console.log(lines(5));





/* VERSIOMN 1.0
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lines(a: number) {
  let b: number = a;
  a = 0;
  for (let i: number = 0; i <= canvas.width / (b * 2); i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(canvas.width / 2, a);
    ctx.lineTo(canvas.width / 2 - a, canvas.height / 2);
    ctx.stroke();
    a += b;
  }

  a = 0;
  for (let i: number = 0; i <= canvas.width / (b * 2); i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(canvas.width / 2, a);
    ctx.lineTo(canvas.width / 2 + a, canvas.height / 2);
    ctx.stroke();
    a += b;
  }

  a = 0;
  for (let i: number = 0; i <= canvas.width / (b * 2); i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(canvas.width / 2, canvas.height - a);
    ctx.lineTo(canvas.width / 2 - a, canvas.height / 2);
    ctx.stroke();
    a += b;
  }

  a = 0;
  for (let i: number = 0; i <= canvas.width / (b * 2); i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(canvas.width / 2, canvas.height - a);
    ctx.lineTo(canvas.width / 2 + a, canvas.height / 2);
    ctx.stroke();
    a += b;
  }
}
console.log(lines(5));
*/