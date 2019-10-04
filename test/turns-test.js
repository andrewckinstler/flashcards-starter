var chai = require('chai');
var assert = require('chai').assert;
var expect = chai.expect;
var Turns = require('../src/turns.js');
var Card = require('../src/Card.js');

describe('Turns', function () {

let card;
let turn;

  beforeEach(() => {
    card = new Card({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
    turn = new Turns('object', card);
  });

  it('should be a function', function () {
    assert.isFunction(Turns);
  });

  it('should instantiate with two arguments', function() {
    expect(turn.guess).to.equal('object')
    expect(turn.card).to.equal(card)
  })

  it('should return the player\'s guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  })

  it('should return the current card', function() {
    expect(turn.returnCard()).to.equal(card);
  })

  it('should return a boolean indicating correct match', function(){ 
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should give feedback', function(){ 
    expect(turn.giveFeedback()).to.equal("correct!")
  })

});