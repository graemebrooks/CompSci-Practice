let data = [ -10, 0, 5, 10, 11, 3, 4, 18, 7, 21 ];

function pivot(arr, start = 0, end = arr.length - 1) {
	let pivot = arr[start];
	let swapIdx = start;

	const swap = (arr, firstIdx, secondIdx) => {
		let temp = arr[firstIdx];
		arr[firstIdx] = arr[secondIdx];
		arr[secondIdx] = temp;
	};

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);
	return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIdx = pivot(arr, left, right);
		// left
		quickSort(arr, left, pivotIdx - 1);
		// right
		quickSort(arr, pivotIdx + 1, right);
	}
	return arr;
}

console.log(quickSort(data));
