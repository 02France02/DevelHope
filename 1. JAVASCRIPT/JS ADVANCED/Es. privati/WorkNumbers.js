//🍰 Esercizio 1: Somma di numeri: Calcola la somma di due numeri e stampa il risultato sulla console.
let sum = 5 + 6;
// console.log(sum);



//🍰 Esercizio 2: Sottrazione di numeri: Calcola la differenza tra due numeri e stampa il risultato sulla console.
let sottr = 5 - 6;
// console.log(sottr);



//🍰 Esercizio 3: Moltiplicazione di numeri: Calcola il prodotto tra due numeri e stampa il risultato sulla console.
let molti = 5 * 6;
// console.log(molti);



//🍰 Esercizio 4: Divisione di numeri: Calcola il risultato della divisione tra due numeri e stampa il risultato sulla console.
let divi = 5 * 6;
// console.log(divi);



//🍰 Esercizio 5: Resto della divisione: Calcola il resto della divisione tra due numeri e stampa il risultato sulla console.
let resto = 11 % 6;   //il 6 sta 1 volta nell'11, con il resto di 5
// console.log(resto);



//🍰 Esercizio 6: Incremento di un numero: Incrementa un numero di 1 e stampa il risultato sulla console.
let increase = 0;
increase++;                     //chiamiamo la variavile e la incrementiamo di 1 con ++ affianco.
// console.log(increase);



//🍰 Esercizio 7: Decremento di un numero: Decrementa un numero di 1 e stampa il risultato sulla console.
let decrease = 0;
decrease--;                     //chiamiamo la variavile e la decrementiamo di 1 con -- affianco.
// console.log(decrease);



//🍰 Esercizio 8: Calcolo della potenza: Calcola la potenza di un numero elevato a una potenza predefinita e stampa il risultato sulla console.
let power = 2**2;
let pow = Math.pow(2, 3);              //funzione matematica per calcolare le potenze. Math.pow(base, esponente)
// console.log(power, pow);



//🍰 Esercizio 9: Calcolo della radice quadrata: Calcola la radice quadrata di un numero e stampa il risultato sulla console.
let radical =  9**(1/2);              //radice quadrata 
let radicalSquare = Math.sqrt(9);         //funzione matematica
// console.log(radical, radicalSquare);



//🍰 Esercizio 10: Arrotondamento di un numero: Scrivi un programma che arrotondi un numero decimale e stampi il risultato sulla console.
let fullNum = 5.852;
let radioNum = Math.floor(fullNum)
// console.log(radioNum);



//🍰 Esercizio 11: Generazione di un numero casuale: Scrivi un programma che generi un numero casuale compreso tra un valore minimo e massimo e lo stampi sulla console.
let randomNum = Math.random()*100;                    //genera numeri random da 0 a 100
let randomNumRadio = Math.floor(Math.random()*100);     //genera numeri random da 0 a 100 e li arrotonda al num intero più vicino 
// console.log(randomNum);



//🍰 Esercizio 12: Conversione da stringa a numero: Scrivi un programma che converte una stringa contenente un numero in un vero numero e stampa il risultato sulla console.

function convert(str) {
    if(typeof str === "string") {
        console.log(Number(str));
    } else {
        console.log("inserisci una stringa");
    };
}
convert("52");