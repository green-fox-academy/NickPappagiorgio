'use strict';

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`;
  }
  getGoal() {
    return "My goal is: Live for the moment!";
  }
}

class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  constructor(name: string, age: number, gender: string, previousOrganization: string, skippedDays: number = 0) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }
  introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`;
  }
  getGoal() {
    return "Be a junior software developer.";
  }
  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name: string, age: number, gender: string, level: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }
  introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`;
  }
  getGoal() {
    return "Educate brilliant junior software developers.";
  }
}

class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(name: string, age: number, gender: string, company: string, hiredStudents: number = 0) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = hiredStudents;
  }
  introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`;
  }
  hire() {
    this.hiredStudents++;
  }
  getGoal() {
    return "Hire brilliant junior software developers.";
  }
}

class Cohort {
  name: string;
  students: string[];
  mentors: string[];

  constructor(name: string, students?: string[], mentors?: string[]) {
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }
  addStudent(Student) {
    Student.push(this.students);
  }
  addMentor(Mentor) {
    Mentor.push(this.mentors);
  }
  info() {
    return `The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`;
  }
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person('Jane Doe', 30, 'female');
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student('Jane Doe', 30, 'female', 'The School of Life', 3);
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor('Jane Doe', 30, 'female', 'intermediate');
people.push(mentor);
let sponsor = new Sponsor('Jane Doe', 30, 'female', 'Google', 5);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);
student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();