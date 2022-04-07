/*
 * URL: https://ccd-school.de/en/coding-dojo/function-katas/from-roman-numerals/
 * Name: Function Kata „From Roman Numerals“
 * Task: Implement a function that maps roman numerals to decimals.
 * */

interface RomanToNumeral {
  [key: string]: number;
}

const romanNumeralMap: RomanToNumeral = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const fromRomanNumerals = (romanNumeral: string): number => {
  romanNumeral = romanNumeral
    .replaceAll('IV', 'IIII')
    .replaceAll('IX', 'VIIII')
    .replaceAll('XL', 'XXXX')
    .replaceAll('XC', 'LXXXX')
    .replaceAll('CD', 'CCCC')
    .replaceAll('CM', 'DCCCC');

  const stringArray = romanNumeral.split('');
  let count = 0;
  stringArray.map((letter) => {
    count += romanNumeralMap[letter];
  });
  return count;
};
