'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let pastSeconds: number = (currentHours * 3600) + (currentMinutes * 60) + (currentSeconds);

let remainingSeconds: number = (24 * 3600) - pastSeconds;


console.log(pastSeconds);
console.log(remainingSeconds);

if (pastSeconds + remainingSeconds === 86400) {
    console.log(true);
}