'use strict';

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function word(something: string) {
  if (something.indexOf('x') === -1) { //base case
    return something;
  } else {
    something = something.replace('x', 'y');
    return word(something);
  }
}
console.log(word('FoxiMaxi'));