const convertInt = (integer) => {
  let newString = `${integer}`
  console.log(newString)
}

const convertToString = (integer, splitNumbers = []) => {
  let num = integer
  splitNumbers.unshift(num % 10)
  num = Math.trunc(num / 10)
  console.log(num)
  console.log(splitNumbers)

  if (num > 0) {
    convertToString(num, splitNumbers)
  } else {
    let n = ''

    for (let i = 0; i < splitNumbers.length; i++) {
      n = n + splitNumbers[i]
    }

    console.log(n)
  }
}

convertToString(34)
