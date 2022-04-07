/*
 * URL: https://ccd-school.de/en/coding-dojo/function-katas/russian-peasant-multiplication/
 * Name: Function Kata „Russian Peasant Multiplication“
 * Task: Write a function that multiplies two whole numbers by using the Russian Peasant Multiplication algorithm.
 * */

export const russianMultiplication = (x: number, y: number): number => {
  let answer: number = 0;

  while (x >= 1) {
    if (Math.floor(x % 2) !== 0) {
      answer += y;
    }
    x /= 2;
    y *= 2;
  }

  return answer;
};
