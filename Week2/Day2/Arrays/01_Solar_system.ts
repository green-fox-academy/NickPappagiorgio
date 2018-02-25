'use strict'

// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"


// VERSION 2.0
planetList.push('Saturn');
console.log(planetList);

//// VERSION 1.0
/*
function putSaturn(value: string) {
  planetList.push(value);
  console.log(planetList);
}

putSaturn('Saturn');
*/