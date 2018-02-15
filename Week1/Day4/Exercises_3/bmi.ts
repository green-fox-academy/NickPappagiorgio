'use strict';

let massInKg: number = 89.2;
let heightInM: number = 1.81;
let kgPerM: number = null;
let bmi: number = null;

// Print the Body mass index (BMI) based on these values

// 1. divide your weight in kilograms (kg) by your height in metres (m)
// 2. then divide the answer by your height again to get your BMI.


kgPerM = massInKg / heightInM;
//console.log(valami);
bmi = kgPerM / heightInM;
console.log(bmi);