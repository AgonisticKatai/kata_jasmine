describe('function sum', function () {
  it('should be defined', function () {
    expect(sum).toBeDefined() 
  })
  it('should be a function', function () {
    expect(typeof sum).toBe('function')
  })
  it('should return 5 when sum(2, 3)', function () {
      var result = sum(2, 3)
      expect(result).toBe(5)
    })
})
