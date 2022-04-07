import { countCharacters } from './ccd/countCharacters/countCharacters';
import { csvTableizer } from './ccd/csvTableizer/csvTableizer';
import { fizzbuzz } from './ccd/fizzbuzz/fizzbuzz';
import { happyNumbers } from './ccd/happyNumbers';
import { rotThirteen } from './ccd/rotThirteen';
import { russianMultiplication } from './ccd/russianMultiplication/russianMultiplication';
import { christmasTree } from './ccd/christmasTree';
import { fromRomanNumerals } from './ccd/fromRomanNumerals/fromRomanNumerals';

const index = (challengeNumber: number) => {
  switch (challengeNumber) {
    case 1: {
      console.log(countCharacters('Das darf nicht sein'));
      break;
    }
    case 2: {
      csvTableizer();
      break;
    }
    case 3: {
      for (let i = 0; i <= 101; i++) {
        console.log(fizzbuzz(i));
      }
      break;
    }
    case 4: {
      console.log(rotThirteen('Hello, World'));
      break;
    }
    case 5: {
      console.log(russianMultiplication(47, 42));
      break;
    }
    case 6: {
      const previousNumbers: number[] = [];
      happyNumbers(previousNumbers, 19);
      break;
    }
    case 7: {
      christmasTree(5);
      break;
    }
    case 8: {
      console.log(fromRomanNumerals('XCIX'));
      break;
    }
    default:
      break;
  }
};
index(2);
