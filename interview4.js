const findSmaller = (array) => {
  let start = 9999999999999
  for (let i = 0; i < array.length; i++) {
    if (array[i] < start) {
      start = array[i]
    }
  }
  console.log(start)
  return start
}

findSmaller([6, 7, 1, 2, 3, 4, 5])
