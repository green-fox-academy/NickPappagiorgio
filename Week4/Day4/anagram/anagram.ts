'use strict';

export class Anagram {
  anagram(stringOne: string, stringTwo: string): boolean {

    if (stringOne.length !== stringTwo.length) {
      return false;
    }

    let check: number = 0;
    for (let i: number = 0; i < stringOne.length; i++) {
      for (let j: number = 0; j < stringTwo.length; j++) {
        if (stringOne.charAt(i) === stringTwo.charAt(j)) {
          check++;
        }
      }
    } if (check === stringOne.length) {
      return true;
    } else {
      return false;
    }
  }
}