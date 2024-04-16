"use strict"

/*Задача 1
Написать программу для решения квадратных уравнений (ax² + bx + c = 0).*/

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


/*Задача 2
Банку «Капитал Кэпиталс» нужно написать калькулятор для расчёта выплат по ипотеке, и они решили поручить эту задачу вам.
Напишите функцию, которая будет принимать процентную ставку, сумму первоначального взноса, сумму кредита и срок (длительность кредита в месяцах) в качестве аргументов и выдавать сумму, которую в итоге заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом).*/

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let hundredth = percent / 12 / 100;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (hundredth + (hundredth / (((1 + hundredth) ** countMonths) - 1)));
  let totalMortgage = monthlyPayment * countMonths;

  return (Number(totalMortgage.toFixed(2)));
};