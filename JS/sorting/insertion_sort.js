// Good for a nearly sorted array, good for sorting data streamed in live for this reason.

let data = [ 5, 10, 11, 3, 4, 18, 7, 21 ];

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}

console.log(insertionSort(data));
