function numberChain (number) {
  var result = []
  var nOriginal = parseInt(number.toString().split('').sort().join(''))
  var nReversed = parseInt(number.toString().split('').sort(function (a, b) { return b - a }).join(''))
  var restOfNumbers = nReversed - nOriginal
  var newNumber = parseInt(restOfNumbers.toString().split('').sort().join(''))
  var newNumberDesc = parseInt(restOfNumbers.toString().split('').sort(function (a, b) { return b - a }).join(''))
  var newRestOfNumbers = newNumberDesc - newNumber
  result.push('The original number was => ', number, '\n', nReversed, ' - ', nOriginal, ' = ', restOfNumbers, '\n', newNumberDesc, ' - ', newNumber, ' = ', newRestOfNumbers, '\n')

  var chainLength = 2

  while (newRestOfNumbers !== restOfNumbers) {
    chainLength += 2
    number = newRestOfNumbers
    nOriginal = parseInt(number.toString().split('').sort().join(''))
    nReversed = parseInt(number.toString().split('').sort(function (a, b) { return b - a }).join(''))
    restOfNumbers = nReversed - nOriginal
    newNumber = parseInt(restOfNumbers.toString().split('').sort().join(''))
    newNumberDesc = parseInt(restOfNumbers.toString().split('').sort(function (a, b) { return b - a }).join(''))
    newRestOfNumbers = newNumberDesc - newNumber
    result.push(nReversed, ' - ', nOriginal, ' = ', restOfNumbers, '\n', newNumberDesc, ' - ', newNumber, ' = ', newRestOfNumbers, '\n')
  }

  result.push('The length of chain was => ', chainLength)

  return result
}
