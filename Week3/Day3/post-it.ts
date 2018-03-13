'use strict';

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColorIn: string, textIn: string, textColorIn: string) {
    this.backgroundColor = backgroundColorIn;
    this.text = textIn;
    this.textColor = textColorIn;
  }
}

let orange = new PostIt ('orange', 'Idea1', 'blue');
console.log(orange);

let pink = new PostIt ('pink', 'Awesome', 'black');
console.log(pink);

let yellow = new PostIt ('yellow', 'Superb', 'green');
console.log(yellow);