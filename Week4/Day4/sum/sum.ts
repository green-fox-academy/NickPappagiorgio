'use strict';

export class Sum {
  sum(arr: any []): number {
    let sumArr: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
      if (arr[i] === 0 || arr[i] === null || isNaN(arr[i])) {
        sumArr += 0;
      }
      else {
        sumArr += arr[i];
      }
    } return sumArr;
  }
}