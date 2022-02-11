function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function partition(arr, low, high) {
  // pivot
  let pivot = arr[high]
  console.log(pivot)

  // Index of smaller element and
  // indicates the right position
  // of pivot found so far
  let i = low - 1
  console.log(i)

  for (let j = low; j <= high - 1; j++) {
    console.log(j)

    // If current element is smaller
    // than the pivot
    if (arr[j] < pivot) {
      // Increment index of
      // smaller element

      i++
      swap(arr, i, j)
    }
  }
  swap(arr, i + 1, high)
  console.log(arr)
  return i + 1
}

let arr = [10, 7, 8, 9, 1, 5]
let n = arr.length

partition(arr, 0, n - 1)
