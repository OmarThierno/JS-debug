/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

console.log('Es 1--------------');
// ESERCIZIO 1
const myAge = 32;

function checkAge(age) {
    let message = '';

    if (age < 18) {
        message = `Sei troppo giovane! Hai ${age} anni!`;
        return message
    } else {
        message = 'Hai più di 18 anni!';
        return message
    }
}
console.log(checkAge(myAge));

// message deve essere dichiarata con let e non con Const
// MyAge deve essere dichiarata fuori dalla funzione 

console.log('/Es 1--------------');


console.log('Es 2--------------');

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// errore di sintassi, length si scrive cosi 
console.log('/Es 2--------------');


console.log('Es 3--------------');

// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
// addNumbers();

// dobbiamo aggiungere il parseInt cosi da trasformare da Stinga a numero quello che utente ci forisce con il prompt, senno potrebbe essere che JS lo interpreti come una concatenazione

console.log('/Es 3--------------');


console.log('Es 4--------------');

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
// checkAccess();

// il valore booleano di grantAccess non deve essere racchiuso tra appici (almeno in questo esercizio)

console.log('/Es 3--------------');


console.log('Es 4--------------');

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (email === userEmail) {
            grantAccess = true;
        }
    }
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
    
}

checkAccessImproved();

// mancava la chiusura della funzione
// la condizione userEmail.length > 5 è in più
// il valore booleano di grantAccess non deve essere racchiuso tra appici (almeno in questo esercizio)
//la condizione is grantAccess deve essere fuori dal ciclo for

console.log('/Es 4--------------');



























