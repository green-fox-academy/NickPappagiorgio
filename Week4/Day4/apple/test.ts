import { test } from 'tape';
import { Apple } from './apple';

test('Is it a string?', t => {
  const apple = new Apple();

  let newString = apple.getApple();
  let expected = 'apple';

  t.equal(newString, expected);
  t.end();
});