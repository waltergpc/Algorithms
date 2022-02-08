const longestCharacter = (str) => {
  let repetitions = {}
  let letters = str.split('')
  for (let i = 0; i < letters.length; i++) {
    if (repetitions[letters[i]]) {
      repetitions[letters[i]] += 1
    } else {
      repetitions[letters[i]] = 1
    }
  }
  console.log(letters)
  console.log(repetitions)
}

longestCharacter('uuujadwcfasdcasdfcdzxc')
