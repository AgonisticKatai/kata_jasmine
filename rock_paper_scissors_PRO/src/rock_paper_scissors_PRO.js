var game = {
  player1: 0,
  player2: 0,
  rockPaperScissors: function (userInput1, userInput2) {
    if (!userInput2) {
      var userPlay = ['PAPER', 'SCISSORS', 'ROCK']
      var userRandom = Math.round(Math.random() * 2)
      userInput2 = userPlay[userRandom]
    } else if (userInput1 && userInput2) {
      userInput1 = userInput1.toUpperCase()
      userInput2 = userInput2.toUpperCase()
    }
    if (userInput1 === 'PAPER' && userInput2 === 'SCISSORS') {
      game.player2++
      return userInput1 + ' vs ' + userInput2 + ' => ' + userInput2 + ' wins!'
    }
    if (userInput1 === 'SCISSORS' && userInput2 === 'PAPER') {
      game.player1++
      return userInput1 + ' vs ' + userInput2 + ' => ' + userInput1 + ' wins!'
    }
    if (userInput1 === 'PAPER' && userInput2 === 'ROCK') {
      game.player1++
      return userInput1 + ' vs ' + userInput2 + ' => ' + userInput1 + ' wins!'
    }
    if (userInput1 === 'ROCK' && userInput2 === 'PAPER') {
      game.player2++
      return userInput1 + ' vs ' + userInput2 + ' => ' + userInput2 + ' wins!'
    }
    if (userInput1 === 'SCISSORS' && userInput2 === 'ROCK') {
      game.player2++
      return userInput1 + ' vs ' + userInput2 + ' => ' + userInput2 + ' wins!'
    }
    if (userInput1 === 'ROCK' && userInput2 === 'SCISSORS') {
      game.player1++
      return userInput1 + ' vs ' + userInput2 + ' => ' + userInput1 + ' wins!'
    }
    if (userInput1 === userInput2) {
      return userInput1 + ' vs ' + userInput2 + ' => tie!'
    }
    return 'This type is not allowed'
  },
  winner: function () {
    if (game.player1 === game.player2) {
      return 'tie!'
    }
    if (game.player1 > game.player2) {
      return 'player1 is winning!'
    }
    return 'player2 is winning!'
  }
}
