describe('function sum', function () {
  it('should exist', function () {
  	expect(typeof sum).toBeDefined()
  })

  it('should be a function', function () {
  	expect(typeof sum).toBe('function')
  })

  it('should return a number', function () {
 	var result = sum(2, 5)
  	expect(typeof result).toBe('number')
  })

  it('should return 7', function () {
 	var result = sum(2, 5)
  	expect(result).toBe(7)
  })

  it('should return 2 + 5 = 7', function () {
 	var result = sum(2, 5)
  	expect(result).toBe(7)
  })

  it('should return "2" + 5 = 7', function () {
 	var result = sum('2', 5)
  	expect(result).toBe(7)
  })
})
