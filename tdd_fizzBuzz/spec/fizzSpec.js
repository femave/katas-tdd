describe('function fizz', function () {
  it('should exist', function () {
    expect(fizz).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof fizz).toBe('function')
  })
  it('should be an array', function () {
    result = fizz()
    expect(Array.isArray(result)).toBe(true)
  })
  it('should be an array of 100 elements', function () {
    result = fizz()
    expect(result.length).toBe(100)
  })
  it('should be FizzBuzz when the number is multiple of 15', function () {
    result = fizz()
    expect(result[14]).toBe('FizzBuzz')
    expect(result[29]).toBe('FizzBuzz')
  })
  it('should be Buzz when the number is multiple of 5', function () {
    result = fizz()
    expect(result[54]).toBe('Buzz')
    expect(result[69]).toBe('Buzz')
  })
  it('should be Fizz when the number is multiple of 3', function () {
    result = fizz()
    expect(result[98]).toBe('Fizz')
    expect(result[68]).toBe('Fizz')
  })
})
