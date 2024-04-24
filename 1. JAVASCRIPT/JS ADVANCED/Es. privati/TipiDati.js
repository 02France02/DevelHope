//🍰 Esercizio 1: Dichiarare una variabile chiamata "nome" e assegnarle il tuo nome. Stampare la variabile sulla console.
const name = "Francesco";
// console.log(name);



//🍰 Esercizio 2: Dichiarare una variabile chiamata "età" e assegnarle il tuo numero di anni. Stampare la variabile sulla console.
const età = 21;
// console.log(età);



//🍰 Esercizio 3: Dichiarare una variabile chiamata "verificato" e assegnarle il valore booleano true. Stampare la variabile sulla console.
const verificato = true;
// console.log(verificato);



//🍰 Esercizio 4: Dichiarare una variabile chiamata "numeri" e assegnarle un array contenente una serie di numeri. Stampare l'array sulla console.
let numbers = [1, 2, 3, 4, 5];
//console.log(numbers);



//🍰 Esercizio 5: Dichiarare una variabile chiamata "persona" e assegnarle un oggetto con le seguenti proprietà: "nome" (con il tuo nome) e "età" (con il tuo numero di anni). Stampare l'oggetto sulla console.
let person = {
    nome: "Francesco",
    età: 21,
  };
//console.log(person);



//🍰 Esercizio 6: Dichiarare una variabile chiamata "nullo" e assegnarle il valore null. Stampare la variabile sulla console.
let nullo = null;
// console.log(nullo);



//🍰 Esercizio 7: Dichiarare una variabile chiamata "nonDefinito" senza assegnarle un valore. Stampare la variabile sulla console.
const nonDefinito = undefined;
// console.log(nonDefinito);



//🍰 Esercizio 8: Eseguire un'operazione matematica non valida, ad esempio dividere una stringa per un numero. Stampare il risultato sulla console.
let unvalid = true / 5;      //JS converte TRUE in 1, quindi può esser diviso in 5
let unvalid1 = true / "5";      //JS converte TRUE in 1, può convertire anche una stringa piena in numeri,  e comunque può dividere
let unvalid2 = true / "ciao";      //JS converte TRUE in 1, può convertire anche una stringa piena in numeri,  ma in questo caso è una scritta, ed stamperà NaN
let unvalid3 = 5 / "ciao";      //JS, può convertire anche una stringa piena in numeri, ma non può dividere delle parole con dei numeri
// console.log(unvalid, unvalid1, unvalid2, unvalid3);



//🍰 Esercizio 9: Dichiarare una variabile chiamata "simbolo" e assegnarle un valore di tipo Symbol. Stampare la variabile sulla console.

/* I symbol non si auto-convertono a stringa, I Symbol garantiscono di essere unici.
   Anche se creiamo più simboli con la stessa descrizione, saranno comunque valori 
   differenti. La descrizione è utile solamente come etichetta, non ha effetto su nulla. */

const simbolo = Symbol("Pippo");

console.log(simbolo.toString());   //converte in stringa
console.log(simbolo.description);   //estrae tutto quello che sta al suo interno come stringa

let user = {          // appartiene ad un altro codice
    name: "John"
  };
  
  let id = Symbol("id");
  
  user[id] = "ID Value";
  
  console.log(user[id]); // possiamo accedere ai dati utilizzando il symbol come chiave




