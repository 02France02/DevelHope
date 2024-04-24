//🍰 Esercizio 1 Scrivi un programma che utilizzi un template literal per creare una stringa che includa il valore di una variabile e stampi il risultato sulla console.
let test = "ciao";
// console.log(`${test} Piero`);



//🍰 Esercizio 2 Scrivi un programma che utilizzi un template literal per calcolare e stampare il risultato di una somma tra due variabili sulla console.
const num = 5;
const num1 = 7;
// console.log(`The summ is: ${num + num1}`);



//🍰 Esercizio 3 Scrivi un programma che utilizzi un template literal per mostrare nome, età e città di una persona su diverse righe in console.
const obj = {
    name: "Mario",
    age: 52,
    city: "Brindisi"
}
// console.log(`${obj.name} ${obj.age} ${obj.city}`);

//🍰 Esercizio 4 (difficile) Scrivi un programma che utilizzi un template literal per creare una lista HTML con elementi dinamici e stampi il risultato sulla console.
const frutta = ["Mela", "Banana", "Arancia"];
let listaHTML = "<ul>";
for (let frutto of frutta) {
  listaHTML += `<li>${frutto}</li>`;
}
listaHTML += "</ul>";
console.log(listaHTML);



//🍰 Esercizio 5 Scrivi un programma che utilizzi un template literal per creare un messaggio email formattato con nome dinamico.
const nome = "Giovanni";
const messaggio = `
  Ciao ${nome},
  
  Benvenuto nel nostro sito!
  Speriamo che tu trovi tutto ciò di cui hai bisogno.
  
  Cordiali saluti,
  Il team di supporto
`;
// console.log(messaggio);



//🍰 Esercizio 6 Scrivi un programma che utilizzi un template literal per creare un URL dinamico combinando una stringa di base e un parametro e stampi il risultato sulla console.
const url = "www.ciao.com/"
const prod = "prodotto"
const fullUrl = `${url}${prod}`
// console.log(fullUrl);



//🍰 Esercizio 7 Scrivi un programma che utilizzi un template literal per formattare un valore monetario e stamparlo sulla console.
const prezzo = 19.99;
console.log(`Il prezzo del prodotto è: €${prezzo.toFixed(2)}`);



//🍰 Esercizio 8 Scrivi un programma che richieda l'input dell'utente per il nome e l'età, quindi utilizzi un template literal per creare un messaggio personalizzato e stamparlo sulla console.
const nome4 = "Inserisci il tuo nome:";
const età = "Inserisci la tua età:";
console.log(`Ciao ${nome4}! Hai ${età} anni. Benvenuto!`);