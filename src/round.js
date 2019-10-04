var Turn = require('../src/turns.js');


class Round {
  constructor(deck) {
    this.deck = deck
    this.incorrectGuesses = [];
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn (guess, this.returnCurrentCard());
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id)
    }
    return turn.giveFeedback();

  }

  calculatePercent() {
    return parseInt((this.turns - this.incorrectGuesses.length) / this.turns*100)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercent()}% of the questions correctly!`)
  }


}

module.exports = Round;