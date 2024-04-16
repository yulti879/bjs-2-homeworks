"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;  

  if (d === 0) {
    arr.push (-b / 2 * a);
  } else if (d > 0) {
    arr.push ((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
  };

  return arr;
};



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let hundredth = percent / 12 / 100;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (hundredth + (hundredth / (((1 + hundredth) ** countMonths) - 1)));
  let totalMortgage = monthlyPayment * countMonths;

  return (Number(totalMortgage.toFixed(2)));
};