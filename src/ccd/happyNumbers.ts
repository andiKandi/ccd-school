/*
* URL: https://ccd-school.de/coding-dojo/function-katas/froehliche-zahlen/
* Name: Function Kata „Fröhliche Zahlen“
* Task: Entwickle eine Funktion, die erkennt, ob eine Zahl „fröhlich“ ist oder nicht.
        Eine "Fröhliche Zahl" ist eine Zahl, bei der die Summe der Quadrate ihrer Ziffern „auf die Dauer“ 1 ergibt. Beispiel:
*       19 -> 1^2 + 9^2 = 82 -> 8^2 + 2^2 = 68 -> 6^2 + 8^2 = 100 -> 1^2 + 0^2 + 0^2 = 1
* */

const numberToDigits = (num: number): number[] => {
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

const sum = (squaredDigits: number[]): number => {
  return squaredDigits.reduce((partialSum, a) => partialSum + a, 0);
};

const buildSumOfDigits = (num: number): number => {
  const digits = numberToDigits(num);
  const squaredDigits = squareOfDigits(digits);
  return sum(squaredDigits);
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

  const happyNumber = buildSumOfDigits(currentNumber);
  if (isHappyNumber(currentNumber)) {
    console.log(`${previousNumbers[0]} is a HAPPY number!`);
    return;
  }
  happyNumbers(previousNumbers, happyNumber);
};
