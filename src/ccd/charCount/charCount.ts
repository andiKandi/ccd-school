/*
 * URL: https://ccd-school.de/en/coding-dojo/function-katas/count-characters/
 * Name: Function Kata “Count Characters”
 * Task: Write a function to count the number of occurrences of characters in a string.
 *       The input to the function is a string, its output a Dictionary (map) of char/int pairs.
 * */

export interface CharNum {
  [char: string]: number;
}

export const charCount = (input: string): CharNum => {
  const splitInput: string[] = input.split('');

  const charMap: CharNum = {};

  splitInput.forEach((char) => {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else charMap[char] = 1;
  });

  return charMap;
};
