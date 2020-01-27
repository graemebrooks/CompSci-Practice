// Recursion Problems:

function power(base, exponent) {
	if (exponent === 0) {
		return 1;
	}
	return base * power(base, exponent - 1);
}

function factorial(num) {
	if (num === 1) {
		return 1;
	}
	return num * factorial(num - 1);
}

function productOfArray(arr) {
	if (arr.length === 1) {
		return arr[0];
	}
	let lastElement = arr.pop();
	return lastElement * productOfArray(arr);
}

function recursiveRange(num) {
	if (num === 1) {
		return 1;
	}
	return num + recursiveRange(num - 1);
}

function fib(num) {
	if (num <= 2) {
		return 1;
	}
	return fib(num - 1) + fib(num - 2);
}
