'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';

let sizeX: number = canvas.width / 4;
let sizeY: number = 0;
let size: number = canvas.height / 2;
let repeat: number = 7;

function bullshit(x: number, y: number, z: number, repeat: number) {

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + z, y);
  ctx.lineTo(x + z + z / 2, y + z * Math.sqrt(3) / 2);
  ctx.lineTo(x + z, y + z * Math.sqrt(3));
  ctx.lineTo(x, y + z * Math.sqrt(3));
  ctx.lineTo(x - z / 2, y + z * Math.sqrt(3) / 2);
  ctx.lineTo(x, y);
  ctx.stroke();

  if (repeat >= 1) {
    ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
    bullshit(x, y, z / 2, repeat - 1);

    ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
    bullshit(x, y + z * Math.sqrt(3) / 2, z / 2, repeat - 1);

    ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
    bullshit(x + (z / 4) * 3, y + z * Math.sqrt(3) / 4, z / 2, repeat - 1);
  }
}
bullshit(sizeX, sizeY, size, repeat);