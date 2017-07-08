describe('function gradeBook', function () {
  it('should exist', function () {
    expect(gradeBook).toBeDefined()
  })

  it('should be a function', function () {
    expect(typeof gradeBook).toBe('function')
  })

  it('should return a string', function () {
    var result = gradeBook()
    expect(typeof result).toBe('string')
  })

  it('should return a "God dam, how the fuck did you even manage that?" if the score is negative', function () {
    var result = gradeBook(-10, -52, -93)
    expect(result).toBe('God dam, how the fuck did you even manage that?')
  })

  it('should return F if grde1 = 10 and the other 2 undefined', function () {
    var result = gradeBook(10)
    expect(result).toBe('F')
  })

  it('should return F if grde1 = 10 and grade2 = 90 and the last undefined', function () {
    var result = gradeBook(90, 90)
    expect(result).toBe('C')
  })

  it('should return a A if "90 <= score <= 100"', function () {
    var result = gradeBook(95, 92, 93)
    expect(result).toBe('A')
  })

  it('should return a B if "80 <= score < 90 "', function () {
    var result = gradeBook(85, 81, 89)
    expect(result).toBe('B')
  })

  it('should return a C if "70 <= score < 80 "', function () {
    var result = gradeBook(75, 71, 78)
    expect(result).toBe('C')
  })

  it('should return a D if "60 <= score < 70 "', function () {
    var result = gradeBook(65, 60, 69)
    expect(result).toBe('D')
  })

  it('should return a F if "score < 60 "', function () {
    var result = gradeBook(20, 10, 25)
    expect(result).toBe('F')
  })
})
