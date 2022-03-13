/*
 * URL: https://ccd-school.de/coding-dojo/function-katas/zeichen-zaehlen/
 * Name: Function Kata „Zeichen zählen“
 * Task: Entwickle eine Funktion, welche die Anzahl der in einem String vorkommenden Zeichen zählt.
 *       Die Eingabe der Funktion ist ein string, die Ausgabe ein Dictionary von char nach int
 * */

interface CharNum {
  [char: string]: number;
}

export const charCount = (input: string): void => {
  const splitInput: string[] = input.split('');

  const charMap: CharNum = {};

  splitInput.forEach((char) => {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else charMap[char] = 1;
  });

  console.log(charMap);
};
