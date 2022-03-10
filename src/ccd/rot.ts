/*
 * URL: https://ccd-school.de/coding-dojo/function-katas/rot-13/
 * Name: Function Kata „ROT-13“
 * Task: Schreibe eine Funktion, die einen Text mit dem Verfahren ROT-13 verschlüsselt.
 *       Beispiel: Hello, World -> URYYB, JBEYQ
 * */

export const rot = (str: string) => {
  const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  const index = (x: string) => {
    return input.indexOf(x);
  };
  const translate = (x: string) => {
    return index(x) > -1 ? output[index(x)] : x;
  };
  return str.toUpperCase().split('').map(translate).join('');
};
