import { test } from 'tape';
import { Anagram } from './anagram';

test('Anagram test', t => {
  const test = new Anagram;

  t.equal(test.anagram('mozi', 'izom'), true);
  t.equal(test.anagram('mozi', 'izor'), false);
  t.equal(test.anagram('mozi', 'izomx'), false);
  t.end();
})