let data = [ 23, 345, 5467, 12, 2345, 9852 ];

function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
	let max = 1;
	arr.forEach((num) => {
		if (digitCount(num) > max) {
			max = digitCount(num);
		}
	});
	return max;
}

function radixSort(arr) {
	let maxDigits = mostDigits(arr);
	for (let i = 0; i < maxDigits; i++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let j = 0; j < arr.length; j++) {
			digitBuckets[getDigit(arr[j], i)].push(arr[j]);
		}
		arr = [].concat(...digitBuckets);
	}
	return arr;
}

console.log(radixSort(data));
