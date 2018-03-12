'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');
let fileContent = fs.readFileSync('log.txt', 'utf-8');

function IP(string: string) {
  let firstArr: any[] = string.split(' /\n');
  let ip: any[] = [];
  for (let i: number = 0; i < firstArr.length; i++) {
    ip.push(firstArr[i].slice(27, 38));
  } return ip;
}
console.log(IP(fileContent));

function ratio(string: string) {
  let firstArr: any[] = string.split(' /\n');
  let get: any[] = [];
  let post: any[] = [];
  for (let i: number = 0; i < firstArr.length; i++) {
    if (firstArr[i].indexOf('GET') > -1) {
      get.push(firstArr[i]);
    } else if (firstArr[i].indexOf('POST') > -1) {
      post.push(firstArr[i]);
    }
  } return `\n The GET / POST ratio is: ${(get.length / post.length).toFixed(2)}\n`;
}
console.log(ratio(fileContent));