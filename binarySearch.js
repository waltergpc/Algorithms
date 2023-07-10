function binarySearch(array, target) {
	let leftIndex = 0
	let rightIndex = array.length - 1

	while (leftIndex <= rightIndex) {
		let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

		if (target === array[middleIndex]) return middleIndex

		if (target < middleIndex) {
			rightIndex = middleIndex - 1
		} else {
			leftIndex = middleIndex + 1
		}
	}

	return -1
}

console.log(binarySearch([-5, 2, 3, 5, 7], 5))
