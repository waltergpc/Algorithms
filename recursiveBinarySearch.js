const recursiveBinarySearch = (array, target, leftIndex, rightIndex) => {
	const middle = Math.floor((leftIndex + rightIndex) / 2)

	if (array[middle] == target) return middle

	if (leftIndex > rightIndex) return -1

	if (target < array[middle]) {
		return recursiveBinarySearch(array, target, leftIndex, middle - 1)
	} else {
		return recursiveBinarySearch(array, target, middle + 1, rightIndex)
	}
}

const testArr = [-5, 2, 3, 5, 7]

console.log(recursiveBinarySearch(testArr, -4, 0, testArr.length - 1))
