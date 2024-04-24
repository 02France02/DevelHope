//🍰 Esercizio 1 Scrivi un programma che prenda una stringa in input e stampi sulla console la sua lunghezza.
const quest  = "Questa è una stringa";
// console.log(quest.length);



//🍰 Esercizio 2 Scrivi un programma che prenda due stringhe, le concateni e stampi il risultato sulla console.
const secondQuest = "Ciao, " + "come va?";
const secondQuest1 = "Bene, grazie"
// console.log(secondQuest + secondQuest1);



//🍰 Esercizio 3 Scrivi un programma che confronti due stringhe e stampi sulla console se sono uguali o diverse in due `console.log` separati.
const str1 = "Questa";
const str2 = "Questo";

let confront = str1 === str2;
// console.log("Stringe uguali? ", confront);
// console.log("Stringe diverse? ", !confront);



//🍰 Esercizio 4 Scrivi un programma che prenda una stringa numerica e la converta in un numero, stampando il risultato in console.
let numberString = "12345";
let change = Number(numberString);
// console.log(change);



                                                //SOTTORIGHE E METODO includes()

/*substring(inizio, fine): restituisce la parte della stringa compresa tra le posizioni "inizio" e "fine", escludendo quest’ultima. Ad esempio, "ciao".substring(1, 3) restituisce "ia".
  substr(inizio, lunghezza): restituisce la parte della stringa che inizia dalla posizione "inizio" e ha una lunghezza di "lunghezza" caratteri. Ad esempio, "ciao".substr(1, 2) restituisce "ia".
  slice(inizio, fine): Funziona come substring, ma accetta anche valori negativi che indicano la posizione dalla fine della stringa. Ad esempio, "ciao".slice(-3, -1) restituisce "ia".  */
"ciao".substring(1, 3)
"ciao".substr(1, 2)
"ciao".slice(-3, -1)

/*includes() serve a verificare se una stringa o un array contiene un determinato valore. Restituisce true se il valore è trovato, altrimenti false. */
// Esempio con le stringhe
let saluto = "Ciao, questo è Bing";
saluto.includes("Bing"); // restituisce true
saluto.includes("Google"); // restituisce false
saluto.includes("Ciao", 5); // restituisce false, perché inizia a cercare dalla posizione 5

// Esempio con gli array
let numeri = [1, 2, 3, 4, 5];
numeri.includes(3); // restituisce true
numeri.includes(6); // restituisce false
numeri.includes(1, 2); // restituisce false, perché inizia a cercare dalla posizione 2



//🍰 Esercizio 5 Scrivi un programma che prenda una stringa e una sottostringa, utilizzi il metodo includes() per verificare se la sottostringa è presente nella stringa e stampi il risultato sulla console.
const normalString = "Prova";
const underString = "Sottostringa";
const includ = underString.includes("sottostringa")        //Da true se quel pezzo di striga è presente
// console.log(includ);



//🍰 Esercizio 6 Scrivi un programma che prenda una stringa e utilizzando il metodo slice() estragga una parte della stringa in base agli indici di inizio e fine e stampi il risultato sulla console.
const test = "Bellastringa".slice(1, 4)
// console.log(test);



//🍰 Esercizio 7 Scrivi un programma che prenda una stringa, la converta in maiuscolo e stampi il risultato sulla console.
const maiusc = "conversione";
const stringaMaiuscola = maiusc.toUpperCase();
// console.log(stringaMaiuscola);



//🍰 Esercizio 8 Scrivi un programma che prenda una stringa maiuscola, la converta in minuscolo e stampi il risultato sulla console.
const minusc = "CONVERSIONE";
const stringaMinuscola = minusc.toLowerCase();
// console.log(stringaMaiuscola);



//🍰 Esercizio 9 Scrivi un programma che prenda una stringa, una sottostringa da cercare e una sottostringa da sostituire, utilizzando il metodo replace() e stampi il risultato sulla console.
// const normalString1 = "Stringa di base";
// const underString1ToSeach = "base";
// const underString2ToReplace = "casa";
// const replas = normalString.replace(underString1ToSeach, underString2ToReplace)
// console.log(replas);
const stringa = "La mia casa è blu";
const sottostringaDaCercare = "blu";
const sottostringaDaSostituire = "rossa";
const nuovaStringa = stringa.replace(
  sottostringaDaCercare,
  sottostringaDaSostituire
);
// console.log("La nuova stringa è: " + nuovaStringa);



//🍰 Esercizio 10 Scrivi un programma che prenda una stringa, la divida in un array di sottostringhe e stampi il risultato sulla console.
const string = "Ciao, mondo, come, stai";
const arraySottostringhe = string.split(",");
// console.log("Array di sottostringhe: ", arraySottostringhe);



//🍰 Esercizio 11 Scrivi un programma che prenda una stringa in input, rimuova gli spazi iniziali e finali, poi stampi il risultato sulla console.
const stringa1 = "    Ciao, mondo!    ";
const stringaTrim = stringa1.trim();
// console.log("La stringa senza spazi iniziali e finali è: " + stringaTrim);