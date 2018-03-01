'use string';

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function word(something: string) {
  if (something.indexOf('x') === -1) { //base case
    return something;
  } else {
    something = something.replace('x', '');
    return word(something);
  }
}
console.log(word('FoxiMaxi'));