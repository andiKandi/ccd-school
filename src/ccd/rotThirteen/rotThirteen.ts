/*
 * URL: https://ccd-school.de/en/coding-dojo/function-katas/rot-13/
 * Name: Function Kata „ROT-13“
 * Task: Implement a function that encodes a text by [ROT-13].
         The ROT-13 coding exchanges every character by the character 13 positions further back in the alphabet.
         If the value lies behind the end of the alphabet it is fetched from the beginning.
  s       Example: Hello, World -> URYYB, JBEYQ
 * */

export const rotThirteen = (str: string): string => {
  const inputLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const outputLetter = 'NOPQRSTUVWXYZABCDEFGHIJKLM';

  const index = (letter: string, input: string) => {
    return input.indexOf(letter);
  };

  const encode = (letter: string, inputLetter: string, outputLetter: string) => {
    return index(letter, inputLetter) > -1 ? outputLetter[index(letter, inputLetter)] : letter;
  };

  return str
    .toUpperCase()
    .split('')
    .map((letter) => encode(letter, inputLetter, outputLetter))
    .join('');
};
