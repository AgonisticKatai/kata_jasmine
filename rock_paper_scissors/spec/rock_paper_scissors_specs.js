// Problem Description
// We need a function rockPaperScissors() that can receive two parameters with the move of each of the two players in the game "Rock Paper Scissors".
// The possible values are : "PAPER", "SCISSORS" or "ROCK"
// If the function is called with only one parameter the move of the second player should be randomly generated.

describe('function rpsGame', function () {
  it('should be defined', function () {
    expect(rpsGame).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof rpsGame).toBe('function')
  })
  it('should return a string', function () {
    expect(typeof rpsGame()).toBe('string')
  })
  describe('should PAPER vs SCISSORS => SCISSORS wins!', function () {
    it('should PAPER vs SCISSORS => SCISSORS wins!', function () {
      expect(rpsGame('PAPER', 'SCISSORS')).toBe('PAPER vs SCISSORS => SCISSORS wins!')
    })
    it('should SCISSORS vs PAPER => SCISSORS wins!', function () {
      expect(rpsGame('SCISSORS', 'PAPER')).toBe('SCISSORS vs PAPER => SCISSORS wins!')
    })
  })
  describe('should PAPER vs ROCK => PAPER wins!', function () {
    it('PAPER vs ROCK => PAPER wins!', function () {
      expect(rpsGame('PAPER', 'ROCK')).toBe('PAPER vs ROCK => PAPER wins!')
    })
    it('ROCK vs PAPER => PAPER wins!', function () {
      expect(rpsGame('ROCK', 'PAPER')).toBe('ROCK vs PAPER => PAPER wins!')
    })
  })
  describe('should SCISSORS vs ROCK => PAPER wins!', function () {
    it('SCISSORS vs ROCK => PAPER wins!', function () {
      expect(rpsGame('SCISSORS', 'ROCK')).toBe('SCISSORS vs ROCK => ROCK wins!')
    })
    it('ROCK vs SCISSORS => PAPER wins!', function () {
      expect(rpsGame('ROCK', 'SCISSORS')).toBe('ROCK vs SCISSORS => ROCK wins!')
    })
  })
  describe('should same play => tie!', function () {
    it('should same play => tie!', function () {
      expect(rpsGame('ROCK', 'ROCK')).toBe('ROCK vs ROCK => tie!')
    })
  })
  describe('should only one player => complete with a second random player', function () {
    it('should only one player => complete with a second random player', function () {
      expect(typeof rpsGame('ROCK')).toBe('string')
    })
  })
})
