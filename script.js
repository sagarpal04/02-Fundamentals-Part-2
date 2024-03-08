"use strict";
const calcAverage = function (totals) {
  let sum = 0;
  for (let i = 0; i < totals.length; i += 1) {
    sum += totals[i];
  }
  return sum / totals.length;
};
const calcTip = function (bills) {
  const x = [];
  for (let i = 0; i < bills.length; i += 1) {
    let num =
      300 >= bills[i] && bills[i] >= 50 ? bills[i] * 0.15 : bills[i] * 0.2;
    x.push(num);
  }
  return x;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = calcTip(bills);
const totals = [];
for (let i = 0; i < bills.length; i += 1) {
  totals[i] = bills[i] + tips[i];
}
console.log(bills);
console.log(tips);
console.log(totals);
const sum = calcAverage(totals);
console.log(sum);
