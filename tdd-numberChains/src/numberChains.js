function numberChain (number) {
  var result = []
  var numberApear = []
  var nOriginal = parseInt(number.toString().split('').sort().join(''))
  var nReversed = parseInt(number.toString().split('').sort(function (a, b) { return b - a }).join(''))
  var restOfNumbers = nReversed - nOriginal
  result.push('The original number was => ' + number + '\n', nReversed + ' - ' + nOriginal + ' = ' + restOfNumbers + '\n')

  var chainLength = 1

  while (numberApear.includes(restOfNumbers) !== true) {
    numberApear.push(restOfNumbers)
    chainLength++
    number = restOfNumbers
    nOriginal = parseInt(number.toString().split('').sort().join(''))
    nReversed = parseInt(number.toString().split('').sort(function (a, b) { return b - a }).join(''))
    restOfNumbers = nReversed - nOriginal
    numberApear.push(restOfNumbers)
    numberApear.splice(-1, 1)
    result.push(nReversed + ' - ' + nOriginal + ' = ' + restOfNumbers + '\n')
  }
  result.push('The length of chain was => ' + chainLength)

  return result.join('')
}
