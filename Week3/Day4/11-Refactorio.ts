'use etrict';

// Create a recursive function called `refactorio`
// that returns it's input's factorial

function factorial(n: number) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));