'use strict';

let students: any[] = [
  { name: 'Rezso', age: 9.5, candies: 2 },
  { name: 'Zsombor', age: 12, candies: 5 },
  { name: 'Aurel', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'Gerzson', age: 10, candies: 1 },
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreThan(candies: number) {
  let filteredStudents: any[] = students.filter(function (student) {
    return student.candies > candies;
  });

  filteredStudents.forEach(function (student) {
    console.log(student.name + ': ' + student.candies)
  })
}

moreThan(4);