/*
 * URL: https://ccd-school.de/en/coding-dojo/function-katas/christmas-tree/
 * Name: Function Kata „Christmas tree“
 * Task: Write a function that „draws“ a Christmas tree with ASCII characters (ASCII art).
         The „picture“should be returned as a collection of strings.
         See the following example of a tree with height 5:
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
