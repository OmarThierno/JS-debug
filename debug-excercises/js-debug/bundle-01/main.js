/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

console.log('ES 1 ----------');

// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// era un ciclo infinito, ho cambiato la condizione da i > 5 a i < 5
console.log('/ES 1 ----------');


console.log('ES 2 ----------');

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

console.log(addIfEven(4));
console.log(addIfEven(13));

// un un sono simbolo = è un operatore si assegnamento
// in questa funzione voglione sapere se il numero è pari o no (una condizione)
console.log('/ES 2 ----------');


console.log('ES 3 ----------');

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// per il ciclo For ogni seczione ha bisogno del punto e virgola e non solo la virgola
loopToFive();

console.log('/ES 3 ----------');


console.log('ES 4 ----------');

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];

function displayEvenNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers(numbers)); // dovrebbe restituire [2,4,6,8]

console.log('/ES 4 ----------');
