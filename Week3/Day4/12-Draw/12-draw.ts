'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';

let size: number = canvas.width / 3;

function bullshit(x: number, y: number, z: number) {

  ctx.strokeRect(x, y - z, z, z);
  ctx.strokeRect(x - z, y, z, z);
  ctx.strokeRect(x + z, y, z, z);
  ctx.strokeRect(x, y + z, z, z);

  if (z >= 10) {
    ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
    bullshit(x - (z / 3) * 2, y + (z / 3), z / 3);
    ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
    bullshit(x + (z / 3), y - (z / 3) * 2, z / 3);
    ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
    bullshit(x + (z / 3) * 4, y + (z / 3), z / 3);
    ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
    bullshit(x + (z / 3), y + (z / 3) * 4, z / 3);
  }
}
bullshit(size, size, size);