"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	let x1 = (-b + Math.sqrt(d)) / (2 * a);
	let x1 = (-b - Math.sqrt(d)) / (2 * a);

	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		arr = [x1];
	} else {
		arr = [x1, x2];
	};

	return arr;
};



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let hundredth = percent / 12 / 100;
	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (hundredth + (hundredth / (((1 + hundredth) ** countMonths) - 1)));
	let totalMortgage = monthlyPayment * countMonths;

	return (Number(totalMortgage.toFixed(2)));
}