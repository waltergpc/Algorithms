const sumDiagonals = (matrix) => {
  let firstDiagonal = 0
  let secondDiagonal = 0

  for (let i = 0; i < matrix.length; i++) {
    firstDiagonal += matrix[i][i]
    secondDiagonal += matrix[i][matrix.length - 1 - i]
  }
  console.log(firstDiagonal)
  console.log(secondDiagonal)
}

let matrix1 = [
  [1, 2, 3, 4, 25],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]

sumDiagonals(matrix1)
