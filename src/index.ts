import { happyNumbers } from './ccd/happyNumbers';

const index = () => {
  // charCount();
  // csv();
  // fizzbuzz();
  // console.log(rot("Hello, World"));
  // russianMultiplication(47,42)

  const previousNumbers: number[] = [];
  happyNumbers(previousNumbers, 16);
  // console.log('running')
};
index();
