function rpsGame (userInput1, userInput2) {
  if (!userInput2) {
    var userPlay = ['PAPER', 'SCISSORS', 'ROCK']
    var userRandom = Math.round(Math.random() * 3)
    userInput2 = userPlay[userRandom]
  }
  if (userInput1 === 'PAPER' && userInput2 === 'SCISSORS') {
    return userInput1 + ' vs ' + userInput2 + ' => ' + userInput2 + ' wins!'
  }
  if (userInput1 === 'SCISSORS' && userInput2 === 'PAPER') {
    return userInput1 + ' vs ' + userInput2 + ' => ' + userInput1 + ' wins!'
  }
  if (userInput1 === 'PAPER' && userInput2 === 'ROCK') {
    return userInput1 + ' vs ' + userInput2 + ' => ' + userInput1 + ' wins!'
  }
  if (userInput1 === 'ROCK' && userInput2 === 'PAPER') {
    return userInput1 + ' vs ' + userInput2 + ' => ' + userInput2 + ' wins!'
  }
  if (userInput1 === 'SCISSORS' && userInput2 === 'ROCK') {
    return userInput1 + ' vs ' + userInput2 + ' => ' + userInput2 + ' wins!'
  }
  if (userInput1 === 'ROCK' && userInput2 === 'SCISSORS') {
    return userInput1 + ' vs ' + userInput2 + ' => ' + userInput1 + ' wins!'
  }
  if (userInput1 === userInput2) {
    return userInput1 + ' vs ' + userInput2 + ' => tie!'
  }
  return 'this type is not allowed'
}
