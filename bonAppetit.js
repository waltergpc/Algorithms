const bonAppetit = (bill, k, b) => {
  // Write your code here
  let total = bill.reduce((a, c) => {
    return a + c
  }, 0)

  let afterNotConsumed = (total - bill[k]) / 2

  if (afterNotConsumed === b) {
    console.log('Bon Appetit')
  } else {
    console.log(b - afterNotConsumed)
  }
}
