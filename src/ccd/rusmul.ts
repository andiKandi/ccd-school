/*
* URL: https://ccd-school.de/coding-dojo/function-katas/russische-bauernmultiplikation/
* Name: Function Kata „Russische Bauernmultiplikation“
* Task: Schreibe eine Funktion, die zwei ganze Zahlen mit dem Algorithmus „russische Bauernmultiplikation“ multipliziert.
* */

export const rusMul = (x: number, y: number) => {
    let answer:number = 0;

    do{
        if(Math.floor(x % 2) !== 0){

            answer += y;
        }
        console.log(x, y)
        x = x/2;
        y += y;
    }
    while (x >= 1)
    console.log(answer)
}
