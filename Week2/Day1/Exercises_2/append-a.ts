'use strict';

// -  Create an array variable named `nimals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end


let nimals = ["kuty", "macsk", "cic"];
for (let i: number = 0; i < nimals.length; i++) {
  nimals[i] += 'a';
}
console.log(nimals);