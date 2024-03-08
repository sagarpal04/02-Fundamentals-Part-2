"use strict";
const calcTip = function (bills) {
  const x = [];
  for (let i = 0; i < bills.length; i += 1) {
    let tipValue =
      300 >= bills[i] && bills[i] >= 50 ? bills[i] * 0.15 : bills[i] * 0.2;
    x.push(tipValue);
  }
  return x;
};
const calcTotal = function (bills, tips) {
  const y = [];
  for (let i = 0; i < bills.length; i += 1) {
    y.push(bills[i] + tips[i]);
  }
  return y;
};
const bills = [125, 555, 44];
const tips = calcTip(bills);
const totals = calcTotal(bills, tips);
console.log(tips);
console.log(totals);
