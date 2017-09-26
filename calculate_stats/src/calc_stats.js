function calcStats () {
  var userNumbers = Array.from(arguments)
  var maxMin = userNumbers.sort(function (a, b) {
    return a - b
  })
  var averageCont = 0
  var averageCalculation = userNumbers.forEach(function (number) {
    return averageCont += number
  }) / userNumbers.length
  var minValue = '\nMinimum value = ' + maxMin[0]
  var maxValue = 'Maximum value = ' + maxMin[maxMin.length - 1]
  var elemNumber = 'Number of elements in the sequence = ' + userNumbers.length
  var average = 'Average value = ' + averageCont / userNumbers.length + '\n'
  return minValue + '\n' + maxValue + '\n' + elemNumber + '\n' + average
}
calcStats(1, 2, 3, 4, 5, 6)
