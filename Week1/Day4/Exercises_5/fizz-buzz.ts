'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let i: number = 0;
let Fizz: string = 'Fizz';

while (i < 100) {
    i++;
    if (i % 3 == 0) {
        console.log(Fizz);
    } else {
        console.log(i);
    }
}