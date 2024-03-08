"use strict";

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
  rep += 1;
}

let dice = Math.trunc(Math.random() * 6 + 1);
while (dice !== 6) {
  console.log(`Dice -> ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log("Loop is about to end...");
}
