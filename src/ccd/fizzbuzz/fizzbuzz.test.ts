import { fizzbuzz } from './fizzbuzz';

test('check 3 === fizz', () => {
  expect(fizzbuzz(3)).toBe('fizz');
});
test('check 5 == buzz', () => {
  expect(fizzbuzz(5)).toBe('buzz');
});
test('check 15 == fizzbuzz', () => {
  expect(fizzbuzz(15)).toBe('fizzbuzz');
});
test('check 100 == buzz', () => {
  expect(fizzbuzz(100)).toBe('buzz');
});
test('check 1 == 1', () => {
  expect(fizzbuzz(1)).toBe('1');
});
// test('check 101 == outside scope', () => { //TODO: Why does this test not work
//   expect(fizzbuzz(101)).toBe('outside scope');
// });
// test('check 0 == outside scope', () => {
//   expect(fizzbuzz(0)).toBe('outside scope');
// });
