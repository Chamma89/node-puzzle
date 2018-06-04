function cookieCount(c, f, x) {
  var result = 0
  var cookiePerSecond = 2
  var limit = (x / c) - 1

  for (var i = 0; i < limit; i++) {
    var seconds = 0

    seconds += c / cookiePerSecond
    cookiePerSecond += f
    result += seconds
  }
  result += x/cookiePerSecond
  console.log(result)
}

cookieCount(500, 4, 2000)