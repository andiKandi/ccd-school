/*
* URL: https://ccd-school.de/en/coding-dojo/function-katas/happy-numbers/
* Name: Function Kata “Happy Numbers”
* Task: Write a function to determine whether a given number is “happy” or not.
        A “happy number” is a number where the sum of the squares of its digits “in the long run” is equal to 1.
        Example:
*       19 -> 1^2 + 9^2 = 82 -> 8^2 + 2^2 = 68 -> 6^2 + 8^2 = 100 -> 1^2 + 0^2 + 0^2 = 1
* */

const splitNumberIntoDigits = (num: number): number[] => {
  return num
    .toString()
    .split('')
    .map((str) => {
      return Number(str);
    });
};

const squareOfDigits = (digits: number[]): number[] => {
  return digits.map((digit: number) => {
    return digit * digit;
  });
};

const sumOfSquaredDigits = (squaredDigits: number[]): number => {
  return squaredDigits.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

const buildSumOfDigits = (num: number): number => {
  const digits = splitNumberIntoDigits(num);
  const squaredDigits = squareOfDigits(digits);
  return sumOfSquaredDigits(squaredDigits);
};

const isEndlessLoop = (previousNumbers: number[], currentNumber: number): boolean => {
  return previousNumbers.indexOf(currentNumber) !== -1;
};

const isHappyNumber = (currentNumber: number) => {
  return currentNumber === 1;
};

export const happyNumbers = (previousNumbers: number[], currentNumber: number): void => {
  if (isEndlessLoop(previousNumbers, currentNumber)) {
    console.log(`${previousNumbers[0]} is NOT a happy number!`);
    return;
  }
  previousNumbers.push(currentNumber);

  if (isHappyNumber(currentNumber)) {
    console.log(`${previousNumbers[0]} is a HAPPY number!`);
    return;
  }

  const happyNumber = buildSumOfDigits(currentNumber);
  happyNumbers(previousNumbers, happyNumber);
};
