"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1980,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "don't"} driver's licene`;
  },
};
console.log(jonas.calcAge());
console.log(jonas["calcAge"]());
console.log(jonas.age);
console.log(jonas["age"]);

console.log(jonas.getSummary());
