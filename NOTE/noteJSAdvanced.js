//METODI ARREY PER MANIPOLARE E GESTIRE COLLEZIONI DI DATI

//FOR EACH (stampa in terminale tutti gli elementi degli arrey)

                    //MODO 1
//Metodo funzione normale
const numbers = [1, 2, 3, 4];

function logNumbers(numbers) {         //Funzione per avvio della stampa
    console.log(numbers)
    
}

numbers.forEach(logNumbers); //foreach(), è il metodo da chiamare con una callback, che sarà il nome della funzione

                      //MODO 2
//Metodo arrow function
const numbers1 = [1, 2, 3, 4];

numbers1.forEach(numbers1 => console.log(numbers1))

//METODO MAP: trasforma ogni singolo elemento e restituisce un nuovo arrey con gli elementi trasformati
const numbers2 = [1, 2, 3, 4, 5];
const doubled = numbers2.map(numbers2 => numbers2 * 2);

console.log(doubled);

//Identica cosa se si tratta di un arrey di oggetti:
const user = [
    {
        name: "fra",
        surname: "tho",
        age: 53
    },
    {
        name: "rome",
        surname: "pasto",
        age: 33
    },
    {
        name: "titta",
        surname: "marga",
        age: 12
    },

]

const userNames = user.map(user => user.name )
// const userNames = user.map(user =>  {
//     user.age = user.age +1;
//     return user;
// })
console.log(userNames);


//METODO FIND: esso ritorna il primo elemento dell'arrey che soddisfa la condizione fornita
const user1 = [
    {
        name: "fra",
        surname: "tho",
        age: 53
    },
    {
        name: "rome",
        surname: "pasto",
        age: 33
    },
    {
        name: "titta",
        surname: "marga",
        age: 12
    },

]

const myUser1 = user1.find(user1 => user1.name === "titta")  //Il FIND, se si ricerca un nome, prende il primo valore partendo da sopra,
// const myUser1 = user1.find(user1 => user1.age > 30)       //anche se in colonna sono presenti due LUCA, esso prendera il primo.

console.log(myUser1)


//METODO FILTER: crea un nuovo arrey contenente solo elementi che soddisfano una certa condizione
const user2 = [
    {
        name: "fra",
        surname: "tho",
        age: 53
    },
    {
        name: "rome",
        surname: "pasto",
        age: 33
    },
    {
        name: "titta",
        surname: "marga",
        age: 12
    },

]

const myUser2 = user2.filter(user2 => user2.name === "titta")  //esso rinchiude tutti gli elementi "titta" in un arrey

console.log(myUser2);

//METODO REDUCE: esso riduce un arrey a un singlo valore, accumulando i risultati grazie ad una funzione 
const numbers3 = [1, 2, 3, 4, 5];

const sum = numbers3.reduce((a, number) => a + number, 0  )      //la CallBack avrà 2 valori, un accumulatore "a", ed un valore corrente "number". Questi due si andranno a sommare ogni volta
                                                                //si da poi uno 0, sarebbe il valore di partenza dell'accumulatore
console.log(sum)

                          //lo si può fare anche con un arrey di oggetti
const user3 = [
    {
        name: "fra",
        surname: "tho",
        age: 53
    },
    {
        name: "rome",
        surname: "pasto",
        age: 33
    },
    {
        name: "titta",
        surname: "marga",
        age: 12
    },

]

const sum1 = user3.reduce((a, user) => a + user.age, 0)   //si sommano l'età, riducendome ad un unico risultato con .reduce

const avg = sum1 / user3.length;  //ottenuta la somma, la si divide per la lunghezza dell'arrey, in this case,  tree obj.

console.log(avg)


//TEMPLATE STRINGS ``
//Nuova sintassi per definire stringhe in JS. Sono diversi da apici e bengono chiamati BACKTICKS
const name = "Mario"
console.log(`ciao ${name}`)

//si possono concatenare espressioni o altro
const x = 2;
const y = 3;

console.log(`x + y is: ${x + y}`)

//se si vuole andare a capo,evitando di usare /n,  si usano i backricks

let string = `ciao, testo
testo testo`

//LA DESTRUTTURAZIONE
`Un modo per estrarre proprietà da oggetti o elementi da arrey e assegnarle
a variabili distinte`

const numbers4 = [1, 2, 3, 4, 5];
// const numOne = numbers4[0]         Metodo classico
// const numTwo = numbers4[1]
const [numOne, numTwo] = numbers4;  `(si crea una variabile con le quadre chiuse, poi si chiama
                                    l'arrey all'uguale)la posizione,
                                      corrisponde al valore dell'arrey`
console.log(numOne, numTwo)  

//Lo stesso vale per gli OGGETTI
const user4 = {

    names: "fra",
    surname: "tho",
    age: 53,

}

// const names = user4.name     METODO NORMALE
// console.log(names)

const {age, names} = user4;   `si usa una variabile con le graffe, basta chiamare i nomi degli oggetti
                               e poi inserisli nel console.log`
console.log(age, names)

//Per MODIFICARE il nome di una chiave nella chiamata:
const user5 = {

    names1: "fra",
    surname: "tho",
    age: 53,

}
const {age: età, names1} = user5  //KEY: New Name
console.log(età, names1)    //si mette il nuovo nome nel console

//DENTRO UNA FUNZIONE
const user6 = {

    names1: "fra",
    surname: "tho",
    age: 53,

}

function logStudent(user6) {
    console.log(user6.age)              //METODO normale
}
logStudent(user6)

//1° MODO: dentro la funzione
function logStudent(user6) {
    const {age} = user6
    console.log(user6)              
}
logStudent(user6)

//2° MODO: 
function logStudent({age}) {
    console.log(age)             
}
logStudent(           {age})

//SPREAD OPERATOR E REST PARAMETER
`REST PARAMETER: definisce le funzioni e raggruppa un numero indefinito di 
argomenti in un arrey `

function sum(x, y) {
    return x + y;
}

console.log(sum(2, 3))   //USO NORMALE, ma se volessi passare più parametri senza modificare quelli di partenza?

//CON IL REST PARAMETER
`function sum(x, y, ...sumNum)      possiamo anche dare altri parametri insieme al rest parameter`
function sum(...sumNum) {                               //3 puntini + un nome per l'accumulatore. Esso risulta come un arrey 
    return sumNum.reduce((a,number) => a + number, 0)   // Per SOMMARE,  si usa il metodo reduce
}

console.log(sum(2, 3, 4, 5 ))             //si possono usare più numeri

//SPREAD OPERATOR:
`Permette di estrarre tutti gli elementi da array o proprietà da oggetti.`

const arreyOne = [5, 6, 8, 3]
const arreyTwo = [2, 4, 7, 1]

console.log(...arreyOne)        //si mettono i 3 puntini + NOME ARREY DA ESTRARRE

//POSSIBILITA' di concatenare DUE o PIU' arrey

const arreyOnes = [5, 6, 8, 3]
const arreyTwos = [2, 4, 7, 1]

const myArrey = [...arreyOnes, ...arreyTwos];   //Si crea un arrey vuoto, si ca lo spread degli arrey disponibili

console.log(myArrey)      //si chiama l'arrey creato

`CON LO SPREAD PARAMETER,  si può creare una memoria apparte, in modo da far stampare 
per valore e non per riferimento` 

const arrey1 = [5, 6, 6]
//const arrey2 = arrey1      //IN questo modo fa sempre rifermimento all'arrey1, anche per qualche cambiamento
const arrey2 = [...arrey1]  //così no,  diventa indipendente

arrey1.push(7)
console.log(arrey1)   //RISULTATO: [5, 6, 6, 7] 
console.log(arrey2)   //RISULTATO: [5, 6, 6] 

//TUTTO CIO' VALE ANCHE PER GLI OGGETTI, facciamo una copia
const person = {
    name: "Franco",
    lastname: "sassi",
    età: 52,
    città: "milano"
}

const copyPerson = {
    ...person,
    hair: "brown",               //posso anche aggiungere nella copia creata
    città: "Napoli"          //posso modificare i valori già esistenti
}

console.log(copyPerson)