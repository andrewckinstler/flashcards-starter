const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Turn = require('../src/Turns.js');
const Deck = require('../src/deck.js');
const Round = require('../src/round.js');

const Game = require('../src/Game.js');


describe('Game', function () { 
  const game = new Game();
  game.start()
})
