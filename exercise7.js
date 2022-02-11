const reverseString = (str, rec) => {
  let letters = str.split('')

  let newStr = rec

  if (letters.length > 0) {
    newStr += letters[letters.length - 1]
    letters.pop()
    let joined = letters.join('')
    reverseString(joined, newStr)
  } else {
    console.log(newStr)
    return newStr
  }
}

reverseString('hola', '')
