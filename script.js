"use strict";

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];
for (let i = 0; i < jonas.length; i += 1) {
  console.log(jonas[i], typeof jonas[i]);
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i += 1) {
  ages.push(2037 - years[i]);
}
console.log(ages);

console.log("----------- ONLY STRINGS -----------");
for (let i = 0; i < jonas.length; i += 1) {
  if (typeof jonas[i] != "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--------Working with break ---------");
for (let i = 0; i < jonas.length; i += 1) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
