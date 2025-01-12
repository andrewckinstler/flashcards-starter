var chai = require('chai');
var assert = require('chai').assert;
var expect = chai.expect;
var Deck = require('../src/Deck.js');
var Card = require('../src/Card.js');


describe('Deck', function() {

let deck;
let card1;
let card2;
let card3;

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
});

it('should be a function', function () {
  expect(Deck).to.be.a('function');;
});

it('should know how many cards are in the deck', function () {
  expect(deck.countCards()).to.equal(3)
})










})