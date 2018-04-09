const test = require('tape');
const calculateResult = require('./poker-calculator');

test('high card is found', (t) => {
  const expectedResult = 'White wins! - (High card: Ace)';
  const blackHands =
    ['2H', '3D', '5S', '9C', 'KD'];
  const whiteHands =
    ['2C', '3H', '4S', '8C', 'AH'];

  t.equal(calculateResult(blackHands, whiteHands), expectedResult);
  t.end();
});

test('black wins with high card', (t) => {
  const expectedResult = 'Black wins! - (High card: Ace)';
  const blackHands =
    ['2H', '3D', '5S', '9C', 'AH'];
  const whiteHands =
    ['2C', '3H', '4S', '8C', 'KD'];

  t.equal(calculateResult(blackHands, whiteHands), expectedResult);
  t.end();
});

test('pair is found', (t) => {
  const expectedResult = 'Black wins! - (High card: T)';
  const blackHands =
    ['2H', '3D', '5S', '6C', 'TH'];
  const whiteHands =
    ['2C', '3H', '4S', '8C', '9D'];

  t.equal(calculateResult(blackHands, whiteHands), expectedResult);
  t.end();
});

test('pair is found', (t) => {
  const expectedResult = 'Black wins! - (Pair: 5)';
  const blackHands =
    ['2H', '5D', '5S', 'KC', 'AH'];
  const whiteHands =
    ['2C', '3H', '4S', '8C', 'KD'];

  t.equal(calculateResult(blackHands, whiteHands), expectedResult);
  t.end();
});

test('pair is found', (t) => {
  const expectedResult = 'White wins! - (Pair: 8)';
  const blackHands =
    ['2H', '3D', '5S', '9C', 'KD'];
  const whiteHands =
    ['2C', '3H', '4S', '8C', '8S'];

  t.equal(calculateResult(blackHands, whiteHands), expectedResult);
  t.end();
});