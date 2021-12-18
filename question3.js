let i = [13, 24, 05]
let j = [13, 24, 20]

const solution = (start, finish) => {
  let startdate = new Date(2021, 0, 0, start[0], start[1], start[2])
  const finishdate = new Date(2021, 0, 0, finish[0], finish[1], finish[2])
  let counted = []
  while (startdate <= finishdate) {
    let pushed = startdate.toLocaleTimeString()
    let arr = pushed.split(':')
    let joined = arr.join('')
    counted.push(joined)
    startdate.setSeconds(startdate.getSeconds() + 1)
  }

  let counts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }

  for (const elem of counted) {
    for (const digit of elem) {
      counts[digit] = counts[digit] ? counts[digit] + 1 : 1
    }
  }

  let result = Object.values(counts)
  console.log(result)
  return result
}

solution(i, j)
