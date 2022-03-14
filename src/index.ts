import { charCount } from './ccd/charCount/charCount';
import { csvFormatting } from './ccd/csvFormatting';
import { fizzbuzz } from './ccd/fizzbuzz';
import { happyNumbers } from './ccd/happyNumbers';
import { rotThirteen } from './ccd/rotThirteen';
import { russianMultiplication } from './ccd/russianMultiplication/russianMultiplication';
import { christmasTree } from './ccd/christmasTree';

const index = (challengeNumber: number) => {
  switch (challengeNumber) {
    case 1: {
      console.log(charCount('Das darf nicht sein'));
      break;
    }
    case 2: {
      csvFormatting();
      break;
    }
    case 3: {
      fizzbuzz();
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
    default:
      break;
  }
};
index(1);
