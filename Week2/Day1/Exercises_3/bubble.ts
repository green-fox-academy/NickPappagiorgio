'use strict';

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `True` sort that list descending

function bubble(arr: number[], check: boolean) {
  function sortNum(a: number, b: number): number {
    return a - b;
  }
  function sortNumRev(a: number, b: number): number {
    return b - a;
  }
  if (!check) {
    arr = arr.sort(sortNum);
  } else {
    arr = arr.sort(sortNumRev);
  }
  return arr;
}
//  Example:
console.log(bubble([34, 12, 24, 9, 5], false));
//  should print [5, 9, 12, 24, 34]
console.log(bubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]