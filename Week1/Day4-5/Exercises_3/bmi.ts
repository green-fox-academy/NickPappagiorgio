'use strict';

let massInKg: number = 89.0;
let heightInM: number = 1.81;

// Print the Body mass index (BMI) based on these values

// 1. divide your weight in kilograms (kg) by your height in metres (m)
// 2. then divide the answer by your height again to get your BMI.


let kgPerM = massInKg / heightInM;
let bmi = kgPerM / heightInM;
console.log('Your Body mass index is: ' + bmi);