const findOnes = (arr) => {
  let max = 0
  let newArr = []

  let j = 0

  while (j < arr.length - 1) {
    if (arr[j] === 0) {
      newArr[0] = arr[j]
      j++
      break
    }
    j++
  }

  for (let i = j; i < arr.length; i++) {
    if (arr[i] === 1) {
      newArr.push(arr[i] + newArr[newArr.length - 1])
    }
    if (arr[i] === 0) {
      if (max < newArr[newArr.length - 1]) {
        max = newArr[newArr.length - 1]
      }
      newArr.push(arr[i])
    }
  }
  console.log(max)
  return max
}

findOnes([0, 1, 0, 1, 1, 0])
