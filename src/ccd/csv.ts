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

export const csv = () => {
    const csvText = 'Name;Strasse;Ort;Alter\nPeter Pan;Am Hang 5;12345 Einsam;42\nMaria Schmitz;Kölner Straße 45;50123 Köln;43\nPaul Meier;Münchener Weg 1;87654 München;65'
    const lines = csvText.split('\n')

    let firstWordLenght: number = 0;
    let secondWordLenght: number = 0;
    let thirdWordLenght: number = 0;
    let forthWordLenght: number = 0;

    const firsts:string[] = [];
    const seconds:string[] = [];
    const thirds:string[] = [];
    const forths:string[] = [];

    lines.forEach((line)=>{
        const wordsPerLine = line.split(';')
        if (wordsPerLine[0].length > firstWordLenght) firstWordLenght = wordsPerLine[0].length
        firsts.push(wordsPerLine[0])
        if (wordsPerLine[1].length > secondWordLenght) secondWordLenght = wordsPerLine[1].length
        seconds.push(wordsPerLine[1])
        if (wordsPerLine[2].length > thirdWordLenght) thirdWordLenght = wordsPerLine[2].length
        thirds.push(wordsPerLine[2])
        if (wordsPerLine[3].length > forthWordLenght) forthWordLenght = wordsPerLine[3].length
        forths.push(wordsPerLine[3])
    })

    const repeat = (num:number, str: string)=>{
        return Array(num + 1).join(str);
    }

    const formatedFirsts = firsts.map((word)=>{
        const num = firstWordLenght - word.length;
        return word + repeat(num, " ");
    })
    const formatedSeconds = seconds.map((word)=>{
        const num = secondWordLenght - word.length;
        return word + repeat(num, " ");
    })
    const formatedThirds = thirds.map((word)=>{
        const num = thirdWordLenght - word.length;
        return word + repeat(num, " ");
    })
    const formatedForths = forths.map((word)=>{
        const num = forthWordLenght - word.length;
        return word + repeat(num, " ");
    })

    console.log(`${formatedFirsts[0]}|${formatedSeconds[0]}|${formatedThirds[0]}|${formatedForths[0]}|`)
    console.log(`${repeat(firstWordLenght,"-")}+${repeat(secondWordLenght,"-")}+${repeat(thirdWordLenght,"-")}+${repeat(forthWordLenght,"-")}+`)
    console.log(`${formatedFirsts[1]}|${formatedSeconds[1]}|${formatedThirds[1]}|${formatedForths[1]}|`)
    console.log(`${formatedFirsts[2]}|${formatedSeconds[2]}|${formatedThirds[2]}|${formatedForths[2]}|`)
    console.log(`${formatedFirsts[3]}|${formatedSeconds[3]}|${formatedThirds[3]}|${formatedForths[3]}|`)
}
