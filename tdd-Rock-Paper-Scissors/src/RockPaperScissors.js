function rockPaperScissors (option1, option2) {
  var random = Math.random()

  if (option2 === undefined) {
    if (random <= 0.33) {
      option2 = 'paper'
    } else if (random > 0.33 && random < 0.66) {
      option2 = 'rock'
    } else {
      option2 = 'scissor'
    }
  }

  if (option1 === option2) {
    return 'tie'
  }
  if (option1 === 'paper' && option2 === 'scissor' || option1 === 'scissor' && option2 === 'paper') {
    return 'scissors wins'
  }
  if (option1 === 'paper' && option2 === 'rock' || option1 === 'rock' && option2 === 'paper') {
    return 'paper wins'
  }
  if (option1 === 'scissor' && option2 === 'rock' || option1 === 'rock' && option2 === 'scissor') {
    return 'rock wins'
  }
}
