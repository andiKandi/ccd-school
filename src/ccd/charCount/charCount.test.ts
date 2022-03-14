import { charCount, CharNum } from './charCount';

test('Counting characters in string: "Das darf nicht sein"', () => {
  const answer: CharNum = {
    D: 1,
    a: 2,
    s: 2,
    ' ': 3,
    d: 1,
    r: 1,
    f: 1,
    n: 2,
    i: 2,
    c: 1,
    h: 1,
    t: 1,
    e: 1,
  };
  expect(charCount('Das darf nicht sein')).toEqual(answer);
});

test('Counting characters in string: ""', () => {
  const answer: CharNum = {};
  expect(charCount('')).toEqual(answer);
});

test('Counting characters in string: "Aa1`+/ "', () => {
  const answer: CharNum = {
    A: 1,
    a: 1,
    1: 1,
    '`': 1,
    '+': 1,
    '/': 1,
    ' ': 1,
  };
  expect(charCount('Aa1`+/ ')).toEqual(answer);
});
