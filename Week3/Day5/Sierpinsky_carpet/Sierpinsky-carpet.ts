'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';


let x: number = canvas.width / 3;
let y: number = canvas.height / 3;
let z: number = canvas.width / 3;
let counter: number = 11;


function bullshit(x: number, y: number, z: number, c: number) {

  ctx.fillRect(x, y, z, z);

  if (counter >= 1) {
    setTimeout(function () {
      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
      bullshit(x - (z / 1.5), y - (z / 3) * 2, z / 3, c - 1); // TOP_LEFT

      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
      bullshit(x + (z / 3), y - (z / 3) * 2, z / 3, c - 1); // TOP

      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
      bullshit(x + (z + z / 3), y - (z / 3) * 2, z / 3, c - 1); // TOP_RIGHT

      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
      bullshit(x + (z / 3) * 4, y + (z / 3), z / 3, c - 1); // RIGHT

      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
      bullshit(x + (z + z / 3), y + (z / 3) * 4, z / 3, c - 1); //BOTTOM_RIGHT

      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
      bullshit(x + (z / 3), y + (z / 3) * 4, z / 3, c - 1); // BOTTOM

      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
      bullshit(x - (z / 1.5), y + (z / 3) * 4, z / 3, c - 1); //BOTTOM_LEFT

      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
      bullshit(x - (z / 3) * 2, y + (z / 3), z / 3, c - 1); // LEFT
    }, 600)
  }
}
bullshit(x, y, z, counter);