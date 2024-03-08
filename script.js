"use strict";

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
for (let i = jonas.length - 1; i >= 0; i -= 1) {
  console.log(jonas[i]);
}
for (let level = 1; level <= 5; level += 1) {
  for (let step = 1; step <= 4; step += 1) {
    console.log(`Level : ${level} and Step : ${step}`);
  }
}
