import { russianMultiplication } from './russianMultiplication';

test('Russian Multiplication of 47*42', () => {
  const answer: number = 1974;
  expect(russianMultiplication(47, 42)).toBe(answer);
});

test('Russian Multiplication of 0*42', () => {
  const answer: number = 0;
  expect(russianMultiplication(0, 42)).toBe(answer);
});

test('Russian Multiplication of 47*0', () => {
  const answer: number = 0;
  expect(russianMultiplication(47, 0)).toBe(answer);
});
