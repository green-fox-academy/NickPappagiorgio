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
let person = new Person('Jane Doe', 30, 'female');

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
let student = new Student('Jane Doe', 30, 'female', 'The School of Life');

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
let mentor = new Mentor('Jane Doe', 30, 'femail', 'intermediate');

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
let sponsor = new Sponsor('Jane Doe', 30, 'female', 'Google');