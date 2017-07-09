describe('function numberChain', function () {
  it('should exist', function () {
    expect(numberChain).toBeDefined()
  })

  it('should be a function', function () {
    expect(typeof numberChain).toBe('function')
  })

  // it('should be return an array', function () {
  //   var result = numberChain(12)
  //   expect(Array.isArray(result)).toBe(true)
  // })

  it('should contain the original number chain', function () {
    var result = numberChain(123)
    expect(result).toContain(123)
  })

  it('should contain the original number reversed', function () {
    var result = numberChain(123)
    expect(result).toContain(321)
  })

  it('should contain the result of reversed number less original number', function () {
    var result = numberChain(123)
    expect(result).toContain(198)
  })

  it('should contain the result ordered ascending', function () {
    var result = numberChain(123)
    expect(result).toContain(189)
  })

  it('should contain the result ordered descending', function () {
    var result = numberChain(123)
    expect(result).toContain(981)
  })

  it('should do the same operation with the result, resultReversed - result', function () {
    var result = numberChain(123)
    expect(result).toContain(792)
  })

  it('should do the same operation and stop when have the same result 2 times', function () {
    var result = numberChain(123)
    expect(result).toContain(495) // How to check if number is 2 times
  })

  it('should give the length of chain', function () {
    var result = numberChain(123)
    expect(result).toContain(6)
  })
})
