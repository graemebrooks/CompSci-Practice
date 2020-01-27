function binarySearch(arr, val) {
	let leftPointer = 0;
	let rightPointer = arr.length - 1;
	while (leftPointer <= rightPointer) {
		let middlepointer = Math.floor((leftPointer + rightPointer) / 2);
		if (arr[middlepointer] === val) {
			return middlepointer;
		} else if (arr[middlepointer] > val) {
			rightPointer = middlepointer - 1;
		} else if (arr[middlepointer] < val) {
			leftPointer = middlepointer + 1;
		}
	}
	return -1;
}
