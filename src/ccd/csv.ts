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
  let lines = fs.readFileSync('src/ccd/MOCK_DATA.csv', 'utf-8');
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

const formatAttribute = (lineObjectAttribute: string, lenght: number): string => {
  const whitespace = ' ';
  if (lineObjectAttribute) {
    if (lineObjectAttribute.length < lenght) {
      const difference = lenght - lineObjectAttribute.length;
      return `${lineObjectAttribute}${whitespace.repeat(difference)}|`;
    }
  }
  return `${lineObjectAttribute}|`;
};

const printLine = (
  lineObject: line,
  maxLenghtName: number,
  maxLengthstreet: number,
  maxLenghtCity: number,
  maxLengthAge: number
): void => {
  let name = formatAttribute(lineObject.name, maxLenghtName);
  let street = formatAttribute(lineObject.street, maxLengthstreet);
  let city = formatAttribute(lineObject.city, maxLenghtCity);
  let age = formatAttribute(lineObject.age, maxLengthAge);

  console.log(name, street, city, age);
};

export const csv = (): void => {
  const linesAsString = readCsv();

  let maxLenghtName = 0;
  let maxLengthstreet = 0;
  let maxLenghtCity = 0;
  let maxLengthAge = 0;

  const linesAsLine: Array<line> = linesAsString.map((line): line => {
    const devidedLine: Array<string> = line.split(',');

    maxLenghtName = compareLength(maxLenghtName, devidedLine[0] as string);
    maxLengthstreet = compareLength(maxLengthstreet, devidedLine[1] as string);
    maxLenghtCity = compareLength(maxLenghtCity, devidedLine[2] as string);
    maxLengthAge = compareLength(maxLengthAge, devidedLine[3] as string);

    return {
      name: devidedLine[0] as string,
      street: devidedLine[1] as string,
      city: devidedLine[2] as string,
      age: devidedLine[3] as string,
    };
  });

  const minus = '-';
  printLine(linesAsLine[0], maxLenghtName, maxLengthstreet, maxLenghtCity, maxLengthAge);
  console.log(
    `${minus.repeat(maxLenghtName)}+${minus.repeat(maxLengthstreet)} +${minus.repeat(
      maxLenghtCity
    )} +${minus.repeat(maxLengthAge)}+`
  );
  for (let i = 1; i < linesAsLine.length; i++) {
    printLine(linesAsLine[i], maxLenghtName, maxLengthstreet, maxLenghtCity, maxLengthAge);
  }
};
