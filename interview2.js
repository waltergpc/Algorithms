const convertInt = (integer) => {
  let newString = `${integer}`
  console.log(newString)
}

const convertToString = (integer) => {
  let newString = {}
  let num = integer
  let splitNumbers = []
  while (num > 0) {
    splitNumbers.unshift(num % 10)
    num = Math.trunc(num / 10)
    console.log(splitNumbers)
  }

  let n = ''

  for (let i = 0; i < splitNumbers.length; i++) {
    n = n + splitNumbers[i]
  }

  console.log(n)
}

convertToString(1234)
