/*
* URL: https://ccd-school.de/en/coding-dojo/function-katas/fizzbuzz/
* Name: Function Kata „FizzBuzz“
* Task: Write a function to return the numbers from 1 to 100. However, some of the numbers should be translated into a string according to these rules [1]:
        return „Fizz“ for multiples of 3
        return „Buzz“ for multiples of 5
        return „FizzBuzz“ for multiples of 3 and 5
* */

export const fizzbuzz = (num: number): string => {
  if (num <= 0 || num >= 101) {
    return 'outside scope';
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else return num.toString();
};
