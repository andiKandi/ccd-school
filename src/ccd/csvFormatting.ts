import fs from 'fs';

/*
* URL: https://ccd-school.de/coding-dojo/function-katas/csv-tabellieren/
* Name: Function Kata „CSV tabellieren“
* Task: Schreibe eine Funktion, die CSV Zeilen tabelliert.
*
*       Beispiel für eine mögliche Eingabe:
Name;Strasse;Ort;Alter
Peter Pan;Am Hang 5;12345 Einsam;42
Maria Schmitz;Kölner Straße 45;50123 Köln;43
Paul Meier;Münchener Weg 1;87654 München;65
*
*        Ausgabe für das obige Beispiel:
Name         |Strasse         |Ort          |Alter|
-------------+----------------+-------------+-----+
Peter Pan    |Am Hang 5       |12345 Einsam |42   |
Maria Schmitz|Kölner Straße 45|50123 Köln   |43   |
Paul Meier   |Münchener Weg 1 |87654 München|65   |
* */

const readCsv = (): Array<string> => {
  let lines = fs.readFileSync('src/ccd/MOCK_DATA.csvFormatting', 'utf-8');
  lines = lines.replace(/\n/g, ';');
  return lines.split(';');
};

interface line {
  name: string;
  street: string;
  city: string;
  age: string;
}

const compareLength = (current: number, next: string): number => {
  if (next) {
    if (next.length > current) return next.length;
  }
  return current;
};

const formatAttribute = (lineObjectAttribute: string, length: number): string => {
  const whitespace = ' ';
  if (lineObjectAttribute) {
    if (lineObjectAttribute.length < length) {
      const difference = length - lineObjectAttribute.length;
      return `${lineObjectAttribute}${whitespace.repeat(difference)}|`;
    }
  }
  return `${lineObjectAttribute}|`;
};

const printLine = (
  lineObject: line,
  maxLengthName: number,
  maxLengthStreet: number,
  maxLengthCity: number,
  maxLengthAge: number
): void => {
  let name = formatAttribute(lineObject.name, maxLengthName);
  let street = formatAttribute(lineObject.street, maxLengthStreet);
  let city = formatAttribute(lineObject.city, maxLengthCity);
  let age = formatAttribute(lineObject.age, maxLengthAge);

  console.log(name, street, city, age);
};

export const csvFormatting = (): void => {
  const linesAsString = readCsv();

  let maxLengthName = 0;
  let maxLengthStreet = 0;
  let maxLengthCity = 0;
  let maxLengthAge = 0;

  const linesAsLine: Array<line> = linesAsString.map((line): line => {
    const dividedLine: Array<string> = line.split(',');

    maxLengthName = compareLength(maxLengthName, dividedLine[0] as string);
    maxLengthStreet = compareLength(maxLengthStreet, dividedLine[1] as string);
    maxLengthCity = compareLength(maxLengthCity, dividedLine[2] as string);
    maxLengthAge = compareLength(maxLengthAge, dividedLine[3] as string);

    return {
      name: dividedLine[0] as string,
      street: dividedLine[1] as string,
      city: dividedLine[2] as string,
      age: dividedLine[3] as string,
    };
  });

  const minus = '-';
  printLine(linesAsLine[0], maxLengthName, maxLengthStreet, maxLengthCity, maxLengthAge);
  console.log(
    `${minus.repeat(maxLengthName)}+${minus.repeat(maxLengthStreet)} +${minus.repeat(
      maxLengthCity
    )} +${minus.repeat(maxLengthAge)}+`
  );
  for (let i = 1; i < linesAsLine.length; i++) {
    printLine(linesAsLine[i], maxLengthName, maxLengthStreet, maxLengthCity, maxLengthAge);
  }
};
