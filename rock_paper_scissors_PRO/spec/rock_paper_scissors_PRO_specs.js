// Problem Description
// We need a function rockPaperScissors() that can receive two parameters with the move of each of the two players in the game "Rock Paper Scissors".
// The possible values are : "PAPER", "SCISSORS" or "ROCK"
// If the function is called with only one parameter the move of the second player should be randomly generated.

describe('object game', function () {
  it('should be defined', function () {
    expect(game).toBeDefined()
  })
  it('should be an object', function () {
    expect(typeof game).toBe('object')
  })
  it('should return a number', function () {
    expect(typeof game.player1).toBe('number')
  })
  it('should return a number', function () {
    expect(typeof game.player2).toBe('number')
  })
  it('should return a function', function () {
    expect(typeof game.rockPaperScissors).toBe('function')
  })
  it('should return a function', function () {
    expect(typeof game.winner).toBe('function')
  })
  it('should return a string', function () {
    expect(typeof game.rockPaperScissors()).toBe('string')
  })
  it('should return a string', function () {
    expect(typeof game.winner()).toBe('string')
  })
  describe('enter an invalid type of text', function () {
    it('enter an invalid type of text', function () {
      expect(game.rockPaperScissors('yellow', 'LEMMON')).toBe('This type is not allowed')
    })
  })
  describe('should PAPER vs SCISSORS', function () {
    it('should PAPER vs SCISSORS => SCISSORS wins!', function () {
      expect(game.rockPaperScissors('PAPER', 'SCISSORS')).toBe('PAPER vs SCISSORS => SCISSORS wins!')
    })
    it('should SCISSORS vs PAPER => SCISSORS wins!', function () {
      expect(game.rockPaperScissors('SCISSORS', 'PAPER')).toBe('SCISSORS vs PAPER => SCISSORS wins!')
    })
  })
  describe('should PAPER vs ROCK', function () {
    it('PAPER vs ROCK => PAPER wins!', function () {
      expect(game.rockPaperScissors('PAPER', 'ROCK')).toBe('PAPER vs ROCK => PAPER wins!')
    })
    it('ROCK vs PAPER => PAPER wins!', function () {
      expect(game.rockPaperScissors('ROCK', 'PAPER')).toBe('ROCK vs PAPER => PAPER wins!')
    })
  })
  describe('should SCISSORS vs ROCK', function () {
    it('SCISSORS vs ROCK => PAPER wins!', function () {
      expect(game.rockPaperScissors('SCISSORS', 'ROCK')).toBe('SCISSORS vs ROCK => ROCK wins!')
    })
    it('ROCK vs SCISSORS => PAPER wins!', function () {
      expect(game.rockPaperScissors('ROCK', 'SCISSORS')).toBe('ROCK vs SCISSORS => ROCK wins!')
    })
  })
  describe('should same play => tie!', function () {
    it('should same play => tie!', function () {
      expect(game.rockPaperScissors('ROCK', 'ROCK')).toBe('ROCK vs ROCK => tie!')
    })
  })
  describe('when only one player', function () {
    it('complete player2 with a random player', function () {
      expect(typeof game.rockPaperScissors('ROCK')).toBe('string')
    })
  })
})
