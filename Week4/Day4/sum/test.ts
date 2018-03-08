import { test } from 'tape';
import { Sum } from './sum';

test('Summing a list of numbers', t => {
  const sumTest = new Sum();

  t.equal(sumTest.sum([]), 0);
  t.equal(sumTest.sum([11]), 11);
  t.equal(sumTest.sum([null]), 0);
  t.equal(sumTest.sum([2, 2, 2, 2, 2, 1]), 11);
  t.equal(sumTest.sum(['11']), 0);

  t.end();
});