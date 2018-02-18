'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let height: number = 50;
let width: number = 50;
let depth: number = 50;

console.log('Surface Area: ' + 2 * (height * width + height * depth + width * depth));
console.log('Volume: ' + height * depth * width);