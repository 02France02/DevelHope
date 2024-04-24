//🍰 Esercizio 1 Stampa sulla console il risultato della valutazione di due condizioni a scelta utilizzando l'operatore AND.
const condizione1 = true;
const condizione2 = false;
// console.log("Risultato operatore AND: " + (condizione1 && condizione2));      //vediamo AND come un x, TRUE come 1 e FALSE come 0. 1 x 0 = 0 (FALSE)



//🍰 Esercizio 2 Stampa sulla console il risultato della valutazione di due condizioni a scelta utilizzando l'operatore OR.
const condizione3 = true;
const condizione4 = false;
// console.log("Risultato operatore AND: " + (condizione3 || condizione4));     //vediamo OR come un +, TRUE come 1 e FALSE come 0. 1 + 0 = 1 (TRUE)


//🍰 Esercizio 3 Stampa sulla console il risultato della negazione di una condizione a scelta utilizzando l'operatore NOT.
const condizione5 = true;
const condizione6 = false;
// console.log("Risultato operatore AND: " + (condizione5 || !condizione6));



//🍰 Esercizio 4 Date due costanti valutare se valore1 è maggiore di 0 e valore2 è minore di 20, oppure se valore1 è uguale a 5.
const val1 = 2;
const val2 = 0;
// console.log("valutiamo: ", (val1 > 0 && val2 < 20 || val1 === 5));



//🍰 Esercizio 5 Date due stringhe valutare se stringa1 non è vuota e stringa2 non è la parola "treno".
const string = "";
const secondString = "Macchina";
// console.log("valutiamo: ", (string !== "" && secondString !== "treno"));



//🍰 Esercizio 6 Dati tre numeri valutare se: valore1 è maggiore di zero oppure valore2 è minore di venti. Queste condizioni devono verificarsi insieme a valore3 compreso tra 10 e 20.
const num1 = 2;
const num2 = 5;
const num3 = 11;
console.log("Valutiamo: ", (num3 >= 10 && num3 <= 20));