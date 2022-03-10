/*
* URL: https://ccd-school.de/coding-dojo/function-katas/fizzbuzz/
* Name: Function Kata „FizzBuzz“
* Task: Schreibe eine Funktion, die die Zahlen von 1 bis 100 zurückgibt.
*       Manche Zahlen sollen dabei allerdings übersetzt werden [1]:
        Für Vielfache von 3 gibt „Fizz“ aus.
        Für Vielfache von 5 gib „Buzz“ aus.
        Für Vielfache von 3 und 5 gib „FizzBuzz“ aus.
* */

export const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else console.log(i);
  }
};
