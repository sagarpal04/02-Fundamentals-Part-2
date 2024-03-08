"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const namekey = "Name";
console.log(jonas["first" + namekey]);
console.log(jonas["last" + namekey]);

// console.log(jonas."last" + namekey);
// const interestedIn = prompt(
// "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
// );

// if (jonas[interestedIn]) {
// console.log(jonas[interestedIn]);
// } else {
// console.log(
// "Wrong request! Choose between firstName, lastName, age, ob and friends"
// );
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas["friends"][0]}`
);
