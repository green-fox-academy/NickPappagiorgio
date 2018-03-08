'use strict';

export class CountLetters {

  countLetters(inputString: string) {

    let wordCount: any[] = [];
    wordCount = inputString.split('');
    let newWordCount: any[] = [];
    for (let i: number = 0; i < wordCount.length; i++) {
      let counter: number = 0;
      for (let j: number = 0; j < wordCount.length; j++) {
        if (wordCount[i] === wordCount[j]) {
          counter++;
          newWordCount[i] = `${wordCount[i]} ${counter}`;
        }
      }
    } return newWordCount.filter((e, i) => newWordCount.indexOf(e) === i).join(', ');
  }
}