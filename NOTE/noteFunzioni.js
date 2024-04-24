//FUNZIONI: blocco di codice che accetta o non, i valori in input(parametri), e che restituisce i valori di ritorno
function sum(a, b) {      //parametri, val in input
    let result = a + b;
    console.log(result);   
}                          //funzione definita, ma non invocata

sum(2, 3);                  //invocata

//non ritorna un valore. RETURN: stoppa la funzione alla riga prima, serve per uscire immediatamente da essa,
// si usa per lo stampo del valore sullo schermo, sostituisce il console dentro la funct.

function sum(a, b) {
    let result = a + b;
    return result;
}

console.log(sum(2, 3))        //metodo più usato

//OPPURE, diamo il risultato ad una variabile
function test(a, b) {
    let sum = a + b;
    
    return sum;
    
}

let x = test(2, 3);
console.log(x);        //facciamo il console di x

console.log(test(1, " ciao"));        //posso dare più di un valore ad a e b.








//CREIAMO un let , gli diamo un valore. creiamo una funzione, e modifichiamo quel valore.
//vedremo che nel terminale stamperà il let, perche quello nella funct. , è una copia.

//PASSAGGIO PER VALORE: come le variabili numeriche, da variabile a funzione
let numbe = 10;

function myFunc(a) {
    a = 20;
}

console.log(numbe);

myFunc(numbe)              //facendo così, si creerà un collegamento tra NUMBE e A.

console.log(numbe);


//variabile globale = let al di fuori della funzione

let varGlobal = "ciao, sono globale!"             //globale

function sayHello(a) {
    let confermo = " confermo! io locale.";        //locale
    console.log(a + " va bene," + confermo)
}

sayHello(varGlobal)

//variabile locale= dentro una funzione, non la si può rendere globale con var, esso non funziona per le funzioni



//ARROW FUNCTION, piu corta.

function sum(a, b) {        //NORMALE
    return a + b;
}

console.log(sum)


let sum = (a, b) => {       //ARROW
    return a + b;
}

let sum = (a, b) => a + b;      //ARROW, no graffe 
console.log(sum)


//CALLBACK = 

function sayHello(funcComplete) {
    console.log("hello");
    funcComplete();                        //lui avrà la func di callback, sarà la funzione che verrà chiamata appena HELLO, sarà stampato
} 

sayHello(() => {
    console.log("now is completed")
})                                            //dobbiamo passare una funzione ad seyHello(), per attivare funcComplete
                                              //abbiamo dato come parametro alla function seyHello() un altra funzione, sottoforma di Arrow.
                                              //RISULTATO: hello
                                                         //now is completed