import { test } from 'tape';
import { CountLetters } from './count_letters';

test('Count test', t => {
  const test = new CountLetters;

  t.equal(test.countLetters('miami'), 'm 2, i 2, a 1');
  t.equal(test.countLetters('mimi'), 'm 2, i 2');
  t.end();
})