function fizz () {
  var resultArray = []
  for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      resultArray.push('FizzBuzz')
    } else if (i % 5 === 0) {
      resultArray.push('Buzz')
    } else if (i % 3 === 0) {
      resultArray.push('Fizz')
    } else {
      resultArray.push(i)
    }
  }
  return resultArray
}
