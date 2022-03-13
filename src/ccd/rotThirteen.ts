/*
 * URL: https://ccd-school.de/coding-dojo/function-katas/rot-13/
 * Name: Function Kata „ROT-13“
 * Task: Schreibe eine Funktion, die einen Text mit dem Verfahren ROT-13 verschlüsselt.
 *       Beispiel: Hello, World -> URYYB, JBEYQ
 * */

export const rotThirteen = (str: string): string => {
  const inputLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const outputLetter = 'NOPQRSTUVWXYZABCDEFGHIJKLM';

  const index = (letter: string, input: string) => {
    return input.indexOf(letter);
  };

  const encode = (letter: string, inputLetter: string, outputLetter: string) => {
    return index(letter, inputLetter) > -1 ? outputLetter[index(letter,inputLetter)] : letter;
  };

  return str
    .toUpperCase()
    .split('')
    .map((letter)=>encode(letter, inputLetter, outputLetter))
    .join('');
};
