'use strict';

//Create Student and Teacher classes

//Student
///learn()
///question(teacher) -> calls the teachers answer method

//Teacher
//teach(student) -> calls the students learn method
//answer()

class Student {
  leran() {
    console.log('I am learning!');
  }
  question(teacher) {
    teacher.answer();
  }
}

class Teacher {
  teach(student) {
    student.learn();
  }
  answer() {
    console.log('Are you learning?');
  }
}

let Andris = new Student;
let Istvan = new Teacher;
console.log(Andris.question(Istvan));
console.log(Istvan.teach(Andris));