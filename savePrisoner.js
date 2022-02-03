function saveThePrisoner(n, m, s) {
  // Write your code here
  let mod = m % n
  if ((mod + s - 1) % n == 0) {
    return n
  } else {
    return (mod + s - 1) % n
  }
}
