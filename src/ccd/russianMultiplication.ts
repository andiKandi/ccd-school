/*
 * URL: https://ccd-school.de/coding-dojo/function-katas/russische-bauernmultiplikation/
 * Name: Function Kata „Russische Bauernmultiplikation“
 * Task: Schreibe eine Funktion, die zwei ganze Zahlen mit dem Algorithmus „russische Bauernmultiplikation“ multipliziert.
 * */

export const russianMultiplication = (x: number, y: number) => {
  let answer: number = 0;

  do {
    if (Math.floor(x % 2) !== 0) {
      answer += y;
    }
    x = x / 2;
    y *= 2;
  } while (x >= 1);
  console.log(answer);
};
