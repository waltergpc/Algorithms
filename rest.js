const rest = (ar1, ar2, ...rest) => {
  console.log(ar1)
  console.log(ar2)
  console.log(...rest)
}

const exampleArray = [1, 2, 3, 4, 5, 6]

rest('hi', 'hello', 'fr', 'ft')
