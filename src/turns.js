class Turns {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess(guess) {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.card.correctAnswer === this.guess) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return "correct!";
    } else {
      return "incorrect!";
    }
  }
}

module.exports = Turns;