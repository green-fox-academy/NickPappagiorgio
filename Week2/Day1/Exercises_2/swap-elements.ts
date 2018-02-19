'use stricts';

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"];
let i = abc [2];
let j = abc [0];
abc.pop();
abc.shift();
abc.push(j);
abc.unshift(i);
console.log(abc);