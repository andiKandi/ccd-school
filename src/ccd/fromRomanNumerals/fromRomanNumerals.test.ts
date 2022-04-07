import { fromRomanNumerals } from './fromRomanNumerals';
describe('From roman numerals tests', () => {
  test('„I“ -> 1', () => {
    expect(fromRomanNumerals('I')).toBe(1);
  });
  test('„II“ -> 2', () => {
    expect(fromRomanNumerals('II')).toBe(2);
  });
  test('„IV“ -> 4', () => {
    expect(fromRomanNumerals('IV')).toBe(4);
  });
  test('„V“ -> 5“ -> 1', () => {
    expect(fromRomanNumerals('V')).toBe(5);
  });
  test('„IX“ -> 9', () => {
    expect(fromRomanNumerals('IX')).toBe(9);
  });
  test('„XLII“ -> 42', () => {
    expect(fromRomanNumerals('XLII')).toBe(42);
  });
  test('„XCIX“ -> 99', () => {
    expect(fromRomanNumerals('XCIX')).toBe(99);
  });
  test('„MMXIII“ -> 2013“', () => {
    expect(fromRomanNumerals('MMXIII')).toBe(2013);
  });
  test('„CD“ -> 400“', () => {
    expect(fromRomanNumerals('CD')).toBe(400);
  });
  test('„CM“ -> 900“', () => {
    expect(fromRomanNumerals('CM')).toBe(900);
  });
  test('„MMMCMXCIX“ -> 3999“', () => {
    expect(fromRomanNumerals('MMMCMXCIX')).toBe(3999);
  });
});
