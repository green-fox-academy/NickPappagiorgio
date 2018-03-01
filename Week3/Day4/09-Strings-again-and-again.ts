'use strict';

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function word(something: string) {
  if (something.length <= 1) { //base case
    return something;
  } else {
    return `${something.slice(0, 1)}*${word(something.slice(1))}`;
  }
}
console.log(word('FoxiMaxi'));