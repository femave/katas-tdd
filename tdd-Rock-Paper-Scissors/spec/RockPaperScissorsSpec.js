describe('function rockPaperScissors()', function () {
  it('should exist', function () {
    expect(rockPaperScissors).toBeDefined()
  })

  it('rockPaperScissors() should be a function', function () {
    expect(typeof rockPaperScissors).toBe('function')
  })

  it('result of rockPaperScissors() should be a string', function () {
    var result = rockPaperScissors('scissor')
    expect(typeof result).toBe('string')
  })

  it('result of rockPaperScissors("paper","scissor") should be a scissors wins', function () {
    var result = rockPaperScissors('paper', 'scissor')
    expect(result).toBe('scissors wins')
  })

  it('result of rockPaperScissors("paper","rock") should be a paper wins', function () {
    var result = rockPaperScissors('paper', 'rock')
    expect(result).toBe('paper wins')
  })

  it('result of rockPaperScissors("rock","paper") should be a paper wins', function () {
    var result = rockPaperScissors('rock', 'paper')
    expect(result).toBe('paper wins')
  })

  it('result of rockPaperScissors("scissor","rock") should be a rock wins', function () {
    var result = rockPaperScissors('scissor', 'rock')
    expect(result).toBe('rock wins')
  })

  it('result of rockPaperScissors("rock","scissor") should be a rock wins', function () {
    var result = rockPaperScissors('rock', 'scissor')
    expect(result).toBe('rock wins')
  })

  it('equal parameters should be tie', function () {
    var result = rockPaperScissors('rock', 'rock')
    expect(result).toBe('tie')
  })

  it('result of rockPaperScissors("rock") the second parameter should be random', function () {
    var result = rockPaperScissors('rock')
    expect(result).toBeTruthy()
  })
})
