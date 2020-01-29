let data = [ 5, 10, 11, 3, 4, 18, 7, 21 ];

function bubbleSort(arr) {
	let result = arr;
	let isSorted;

	const swap = (arr, firstIdx, secondIdx) => {
		let temp = arr[firstIdx];
		arr[firstIdx] = arr[secondIdx];
		arr[secondIdx] = temp;
	};

	for (let i = arr.length; i > 0; i--) {
		isSorted = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				isSorted = false;
			}
		}
		if (isSorted) break;
	}

	return result;
}

console.log(bubbleSort(data));
