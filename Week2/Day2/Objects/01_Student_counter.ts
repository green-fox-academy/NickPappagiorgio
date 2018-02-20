'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function studentCandies(name: string) {
  let filteredStudents: any[] = students.filter(function(student) {
    return student.name === name;
  });

  // console.log(currentStudent[0].name + ': ' + currentStudent[0].candies)
  filteredStudents.forEach(function(student) {
    console.log(student.name + ': ' + student.candies)
  })
}

studentCandies('Rezso');



function studentsSum(candies) {
  let filteredStudents: any[] = students.filter(function(student) {
    return student.candies < 5;
  });

  let g = 0;

  filteredStudents.forEach(function(age) {
    g += age.age;
  }); 
  console.log(g);
}

studentsSum(5);