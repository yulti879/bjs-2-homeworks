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
