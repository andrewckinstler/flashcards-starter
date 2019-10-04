var chai = require('chai');
var expect = chai.expect;
var Deck = require('../src/Deck.js');
var Card = require('../src/Card.js');
var Round = require('../src/round.js')


describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;


  beforeEach(() => {
    card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    card2 = new Card({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    card3 = new Card({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    });
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  })

  it('should take a turn', function() {
    expect(round.turns).to.equal(0);

    expect(round.returnCurrentCard()).to.equal(card1);

    round.takeTurn('object');

    expect(round.turns).to.equal(1);

    expect(round.returnCurrentCard()).to.equal(card2);

    expect(round.incorrectGuesses).to.deep.equal([]);

  })

  it('should be able to take a turn with incorrect answer', function() {
    expect(round.turns).to.equal(0);

    expect(round.returnCurrentCard()).to.equal(card1);

    round.takeTurn('goblet');

    expect(round.turns).to.equal(1);

    expect(round.returnCurrentCard()).to.equal(card2);

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should be able to calculate percent', function() {
    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('mutator method');

    expect(round.calculatePercent()).to.equal(100)
  })


})