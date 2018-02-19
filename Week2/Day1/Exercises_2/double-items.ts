'use strict';

// -  Create an array variable named `names` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

let names = ['Gin', 'Whiskey', 'Wine', 'Beer']

names.map(function(value: string, index: number) {
  names[index] += names[index];
})
console.log(names);