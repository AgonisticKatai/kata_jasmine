// Your task is to process a sequence of integer numbers
// to determine the following statistics:
//     o) minimum value
//     o) maximum value
//     o) number of elements in the sequence
//     o) average value
// For example: [6, 9, 15, -2, 92, 11]
//     o) minimum value = -2
//     o) maximum value = 92
//     o) number of elements in the sequence = 6
//     o) average value = 21.833333

describe('function calcStats', function () {
  it('should be defined', function () {
    expect(calcStats).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof calcStats).toBe('function')
  })
  it('should return a string', function () {
    expect(typeof calcStats()).toBe('string')
  })
  describe('should determine the following statistics', function () {
    it('should determine the minimum and maximum value, number of elements in the sequence and average value', function () {
      expect(calcStats(4, 5)).toBe('\nMinimum value = 4\nMaximum value = 5\nNumber of elements in the sequence = 2\nAverage value = 4.5\n')
    })
  })
})
