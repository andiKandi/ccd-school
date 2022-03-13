/*
 * URL: https://ccd-school.de/coding-dojo/function-katas/tannenbaum/
 * Name: Function Kata „Tannenbaum“
 * Task: Schreibe eine Funktion, die einen Tannenbaum mit ASCII-Art „gezeichnet“ als Text zurückliefert.
 * Eingabe ist die Höhe des Tannenbaums. Als Beispiel ein Tannenbaum der Höhe 5:
       X
      XXX
     XXXXX
    XXXXXXX
   XXXXXXXXX
       I
 * */
interface TreeLevel {
  twigCount: number;
  whitespaceCount: number;
}
export const christmasTree = (treeHeight: number) => {
  const calculateTreeLevelValues = (treeHeight: number): TreeLevel[] => {
    let twigCount: number = 1;
    let whitespaceCount: number = treeHeight - 1;
    const treeLevels: TreeLevel[] = [{ twigCount, whitespaceCount }];
    for (let i = 1; i < treeHeight; i++) {
      treeLevels.push({ twigCount: (twigCount += 2), whitespaceCount: (whitespaceCount -= 1) });
    }
    return treeLevels;
  };

  const treeLevels = calculateTreeLevelValues(treeHeight);

  const drawTree = (treeLevels: TreeLevel[]): void => {
    const drawTwig = (num: number): string => {
      const twig: string = 'X';
      return twig.repeat(num);
    };

    const drawWhitespace = (num: number): string => {
      const whitespace: string = ' ';
      return whitespace.repeat(num);
    };

    const drawStem = (num: number): string => {
      const whitespace = ' ';
      return `${whitespace.repeat(num + 1)}I`;
    };

    treeLevels.map((treeLevel) => {
      console.log(drawWhitespace(treeLevel.whitespaceCount), drawTwig(treeLevel.twigCount));
    });
    console.log(drawStem(treeLevels[0].whitespaceCount));
  };
  drawTree(treeLevels);
};
