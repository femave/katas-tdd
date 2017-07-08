describe('function drink', function () {
  it('should exist', function () {
    expect(drink).toBeDefined()
  })

  it('should exist function drink', function () {
    expect(typeof drink).toBe('function')
  })

 /* it('should return parameter past to the function', function () {
    var prove = drink('asdasd')
    expect(prove).toBe()
  }) */

  it('should recieve a number and return a string', function () {
    var prove = drink(13)
    expect(typeof prove).toBe('string')
  })

  it('should recieve a number < 14 and return drink toddy', function () {
    var prove = drink(13)
    expect(prove).toBe('drink toddy')
  })

  it('should recieve a number < 18 and return drink coke', function () {
    var prove = drink(15)
    expect(prove).toBe('drink coke')
  })

  it('should recieve a number < 21 and return drink beer', function () {
    var prove = drink(19)
    expect(prove).toBe('drink beer')
  })

  it('should recieve a number > 21 and return drink whisky', function () {
    var prove = drink(23)
    expect(prove).toBe('drink whisky')
  })
})
