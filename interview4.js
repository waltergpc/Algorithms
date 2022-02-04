const findSmaller = (array, low, high) => {
  if (high < low) {
    return array[0]
  }
  if (high == low) {
    return array[low]
  }

  let middle = Math.floor((low + high) / 2)

  if (middle < high && array[middle + 1] < array[middle]) {
    console.log(array[middle + 1])
    return array[middle + 1]
  }

  // Check if mid itself is minimum element
  if (middle > low && array[middle] < array[middle - 1]) {
    console.log(array[middle])
    return array[middle]
  }

  // Decide whether we need to go to left half or right half
  if (array[high] > array[middle]) return findSmaller(array, low, middle - 1)

  return findSmaller(array, middle + 1, high)
}

let arr1 = [10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8]
let n = arr1.length - 1

findSmaller(arr1, 0, n)
