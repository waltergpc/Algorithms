const dayOfProgrammer = (year) => {
  // Write your code here
  let leap = 0
  let date = undefined
  if (year < 1918) {
    if (year % 4 == 0) {
      leap = -1
    }
    console.log(`${13 + leap}.09.${year}`)
    date = `${13 + leap}.09.${year}`
  } else if (year > 1918) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leap = -1
    }
    console.log(`${13 + leap}.09.${year}`)
    date = `${13 + leap}.09.${year}`
  } else {
    console.log('26.09.1918')
    date = '26.09.1918'
  }

  return date
}
