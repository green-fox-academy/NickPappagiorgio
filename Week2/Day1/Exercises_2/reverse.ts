'use strict';

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList: number[] = [3, 4, 5, 6, 7];
console.log(numList.reverse());

let tempNumList: number[] = [];
for (let i: number = 0; i < numList.length; i++) {
  for (let j: number = 0; j < numList.length; j++) {
    tempNumList[i] = numList[j - i];
  }
}
console.log(tempNumList);