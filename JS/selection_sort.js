// Better than bubblesort if you need to minimize number of swaps, otherwise not very useful

let data = [ 1, 5, 10, 11, 3, 4, 18, 7, 21 ];

function SelectionSort(arr) {
	let result = arr;
	const swap = (arr, firstIdx, secondIdx) => {
		let temp = arr[firstIdx];
		arr[firstIdx] = arr[secondIdx];
		arr[secondIdx] = temp;
	};
	for (let i = 0; i < result.length; i++) {
		let minIdx = i;
		for (let j = i + 1; j < result.length; j++) {
			if (result[j] < result[minIdx]) {
				minIdx = j;
			}
		}
		if (i !== minIdx) {
			swap(result, i, minIdx);
		}
	}
	return result;
}

console.log(SelectionSort(data));
