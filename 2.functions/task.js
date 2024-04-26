/*Задача 1
Написать функцию getArrayParams(...arr), которая получает на вход числа, а возвращает минимальное, максимальное и среднее арифметическое значений массива. Используйте rest-параметр для получения произвольного количества аргументов.*/

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
		sum += arr[i]
	}

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min,
		max,
		avg
	}
};

/*Задача 2
Представьте, что у вас есть мясорубка с разными насадками. Мясорубка запускает действие, а сам процесс зависит от того, какая будет насадка. Затем мясорубка применяет насадку ко всему мясу, которое в неё поступает, и выдаёт на выход только самый лучший кусок. Используйте rest-параметр для получения произвольного количества аргументов в каждой насадке.*/

function summElementsWorker(...arr) {
	if (!arr.length) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
};

function differenceMaxMinWorker(...arr) {
	if (!arr.length) {
		return 0;
	}
	return Math.max(...arr) - Math.min(...arr);
};

function differenceEvenOddWorker(...arr) {
	if (!arr.length) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		arr[i] % 2 === 0 ? sumEvenElement = sumEvenElement + arr[i] : sumOddElement = sumOddElement + arr[i];
	}
	return sumEvenElement - sumOddElement;
};

function averageEvenElementsWorker(...arr) {
	if (!arr.length) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
};