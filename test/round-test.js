var chai = require('chai');
var assert = require('chai').assert;
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
    })
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
  })



})