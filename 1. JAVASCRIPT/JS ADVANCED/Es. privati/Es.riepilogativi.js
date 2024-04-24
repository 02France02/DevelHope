/* Esercizio 1: -Scrivi una funzione che accetta come parametro un array di numeri e restituisce un oggetto con le seguenti proprietà:
   min (il valore minimo dell’array), max (il valore massimo dell’array), sum (la somma di tutti i valori dell’array) e 
   avg (la media di tutti i valori dell’array). 
   Usa gli operatori di comparazione, i cicli for e le arrow function. */


let numbers = [1, 2, 3, 4, 5];
let sumNum = {};

function min(arr) {
    return sumNum.min = Math.min(...arr);
};



function max(arr) {
    return sumNum.max = Math.max(...arr);
    
};



function sum(arr) {
    let sum = arr.reduce((a, num) => a + num, 0);
    sumNum.sum = sum
};



function avg(tot, arr) {
    let avg = tot / arr.length 
    sumNum.avg = avg
};


// min(numbers);
// max(numbers);
// sum(numbers)
// avg(sumNum.sum, numbers);

// console.log(sumNum);






/* Esercizio 2: Scrivi una funzione che accetta come parametro una stringa che rappresenta un indirizzo web 
   e restituisce una promessa che si risolve con un oggetto che contiene le seguenti proprietà: 
   -protocol (il protocollo usato dall’indirizzo)
   -domain (il dominio dell’indirizzo)  
   -path (il percorso dell’indirizzo). 
   Usa le stringhe template, le condizionali if, l’operatore ternario, i timeout e le promise.
 */



let www = "https:/www.questoSito.it/digitalguide";
let estract = [];
let url = new URL(www);

// function name(params) {
//     let prot = params.slice(0, 5);
//     estract.protocol = prot;

//     let dom = params.slice(10, 20);
//     estract.domain = dom

//     let percorso = params.slice(21, 23);
//     estract.path = percorso
// }

// name(www);

// console.log(estract);



 
function printProtoc(site) {
    return new Promise((resolve, reject) => {
        
        let prot = site.protocol
        estract.push(prot)  

        setTimeout(() => {

            if (estract[0] === "https:") {
                
                resolve(estract[0])

            } else if (estract[0] === "http:") {
                resolve(`Sito con tecnologia base ${JSON.stringify(estract.protocol)},  continuare lo stesso?`)

            } else {
                reject(new Error("error"))
            }
        }, 2000);
    });
};


// isValidURL()   //verifica se un indirizzo è intero

// printProtoc(url)
// .then((data) => console.log(data))
// .catch((error) => console.error(error)) 




function printHostName(site) {
    return new Promise((resolve, reject) => {
        
        let host = site.hostname
        estract.push(host) 

        setTimeout(() => {

            if (estract[1] !== "") {
                
                resolve(estract[1])

            } else {
                reject(new Error("error"))
            }
        }, 3000);
    });
};

// printHostName(url)
// .then((data) => console.log(data))
// .catch((error) => console.error(error)) 



function printPath(site) {
    return new Promise((resolve, reject) => {
        
        let path = site.pathname
        estract.push(path)

        setTimeout(() => {

            if (estract[2] !== "") {
                
                resolve(estract[2])

            } else {
                reject(new Error("error"))
            }
        }, 4000);
    });
};

// printPath(url)
// .then((data) => console.log(data))
// .catch((error) => console.error(error)) 

// Promise.all([printProtoc(url), printHostName(url), printPath(url)])
// .then((data) => console.log(data))
// .catch((error) => console.error(error)) 


let url1 = new URL(www)            //verifica in automatico il protocollo, il dominio e il percorso del sito al suo interno
// console.log(url1.protocol);
// console.log(url1.hostname);
// console.log(url1.pathname);










/* Esercizio 3: Scrivi una funzione che accetta come parametro una stringa e restituisce un oggetto che contiene le seguenti proprietà: 
   -vocali (il numero delle vocali presenti nella stringa), 
   -consonanti (il numero di consonanti presenti nella stringa), 
   -spazi (il numero di spazi presenti nella stringa),
   -caratteri (il numero totale di caratteri presenti nella stringa). 
   -Usa le stringhe template, le condizionali if, l’operatore ternario e i cicli for. */

   //vocali : a e i o u, consonanti: alfabeto

let testo = "Questa, è una stringa di prova"
let arr = Array(testo)                      //trasforma una stringa in un array
let vowelArr = [];
let vowelNumbers = 0 

//!consonanti , usare toLowerCase()

//estrazione vocali
function findVocals(str) {
    for (const i of str) {
       switch (i) {
        case "a":
            vowelArr.push(i)
            vowelNumbers++ 
            break;
        case "e":
            vowelArr.push(i)
            vowelNumbers++
            break;
        case "i":
            vowelArr.push(i)
            vowelNumbers++ 
            break;
        case "o":
            vowelArr.push(i)
            vowelNumbers++
            break;
        case "u":
            vowelArr.push(i) 
            vowelNumbers++
            break;
        default: 
            break;
       };
    };
};
findVocals(testo);
// console.log(vowelArr);      //mostra oggetto
// console.log(vowelNumbers); //conta lettere








let checkEmpty = 0;
for (let i = 0; i < testo.length; i++) {
    
    if (testo[i] === " ") {
        checkEmpty++;
    }
}

// console.log(checkEmpty);

// let empty = testo.map(lett => lett == " ")
//     console.log(empty);






/*  Esercizio 4: Scrivi una funzione che accetta come parametro un array di oggetti, dove ogni oggetto rappresenta una persona con le seguenti proprietà: 
    -nome (una stringa), 
    -eta (un numero) e 
    -sesso (una stringa che può essere “M” o “F”). 
    -La funzione deve restituire un nuovo array con solo le persone di sesso femminile che hanno un’età compresa tra 18 e 30 anni. Usa le arrow function, 
    il metodo filter e il metodo map. */













                            //DESTRUTTURAZIONE =estrae valori da oggetti o array e le assegna a variabili distinte
//PER ARRAY
let newArr = [[1], 2, 3, 4, 5]

let [d, f, u] = newArr
// console.log(d, u, f);


//PER OGGETTI
let newObj = {name: "Jonny", 
              age: 52,                  //Se il valore key è già presente al suo interno, avrà priorità sulla destrutturazione
              city: "Brindisi"
             }
  //cambio nome key                 //assegno nuova key
let {city: città, name, age = 32, surname = "Rossi"} = newObj;     //Produce una variabile di default all'interno dell'oggetto

// console.log(name, città, age, surname);               


//ESTRARRE OGGETTI ANNIDATI
let newObj1 = {name: "Jonny", 
              age: 52,                  //Se il valore key è già presente al suo interno, avrà priorità sulla destrutturazione
              city: {
                principal: "brindisi",
                
              }
             }

let {city:{principal}} = newObj1      //soluzione per oggetti annidati
// console.log(principal);

let guest = "Francesco";
let admin = "Mario";

let g = 0;
let a = 0;



[g, a] = [admin, guest]   //riassegno le variabili già definite prima


// console.log(a);
 
// console.log(g);




                //REST PARAMETER

function buzz(one, ...two) {
    // console.log("Parameter one = " + one + "Parameter two = " + two);
}
buzz(10, 1, 2, 3, 4, 5, 6, 7 ,8, 9, 0)   //passiamo un numero indefinito di argomenti dopo il primo




                //SPREAD OPERATOR

//ESTRAE tutti i valori di uno o più array, o Oggetto in una variabile

const myArr = [1, 2, 3, 4, 5];
const myArr1 = [2, 4, 6, 8, 10];      //2 casi: concatenare 2 array, nuovo artray by value

let merge = [...myArr, ...myArr1];    //deep copy, non modifica il valore di partenza
// console.log(merge);


                    //SETTIMEOUT
//Esegue un'azione dopo un tot di tempo in millisecondi, usato nelle funz per simulare una risposta API
/* setTimeout(() => {
    console.log("setTimeOut");

}, 500)
 */



                    //SETINTERVAL
//esegue un'azione iterandola a intervalli definiti decisi in millisecondi. Bisognerà catturare il suo id per fermarla con clearinterval()
/* let id = setInterval(() => {                   //immagaziniamo nella variabile il valore di ritorno di setInterv
         console.log("setInterval");
        }, 1000); */

// console.log(id);   //è un oggetto che è il valore di ritorno di setInterval

/* setTimeout(() => {
    clearInterval(id)     //ferma l'iterazione di setInterval
}, 5000); */



                        //CALLBACK
//Funzione chiamata come parametro in un'altra funzione
function myFunc(callBack) {
    callBack()
    console.log("MARIO");          //Sono state introdotte per aspettare una risposta API
};

function myCall() {
    console.log("ciao");
};
// myFunc(myCall);


                    //PROMISE
/* Essa è un oggetto, data come valore di ritorno a una funzione, che rappresenta il completamento o 
   fallimento di un'operazione asincrona/un evento futuro che restituisce un valore */
//classe con funzioni di callback
function myFunc1(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 4) {
                resolve("ok")
            } else {
                reject(new Error("k.o"))
            }
        }, 2000);
    })
    
}
myFunc1(5)
.then(data => console.log(data))                  //metodi con funzione di callback con Arrow Func
.catch(error => console.error(error))             //parametri della Promise

                        //METODI OGGETTO = funzioni specifiche di oggetti, arrey
.then()
.catch()
Object.freeze(Obj) //rende l'oggetto immodificabile
Object.keys(obj)   //restituisce un array con tutte le key
Object.values(obj)   //restituisce un array con tutti i valori






function myProm() {
    return new Promise((resolve, reject) => {
        let condition = true;
        setTimeout(() => {
            if (condition) {
                resolve("true")
            } else {
                reject("false")
            }
        }, 2000);
    });
}

function mySecondProm() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (5 > 4) {
                resolve("maggiore")
            } else {
                reject("minore")
            }
        }, 1000);
    })
}

//SOLUZIONE BELLA
myProm()
.then(data => {
    console.log(data)
    return mySecondProm()
    
})
.then(data2 => console.log(data2))
.catch(error => console.error(error))

//soluzione BRUTTA
myProm()
.then(data => {
   console.log(data);
   mySecondProm()
   .then(data2 => console.log(data2))
})
.catch(error => console.error(error))


                            //ASYNC E AWAIT
/* Sono delle sintassi per costruire delle funzioni asincrone, sostituiscono la concatenazione del metodo then. 
Si usa la gestione degli errori con il try e catch */

async function myAsy() {
    try {

        const one = myProm()
        console.log(one);
        const two = mySecondProm()
        console.log(two);

    } catch (error) {
        console.error(error)
    }
}

myAsy()




                    //API PROMISE
//interfaccia per metter in collegamento front e back-end
Promise.all([])   //unisce tutte le promise in un array,  se una fallisce,  anche l'altre
.then(data => console.log(data))                  
.catch(error => console.error(error))             


Promise.race([])                     //restituisce la prima completata
.then(data => console.log(data))                  
.catch(error => console.error(error))             



                      //GESTIONE DEGLI ERRORI


function myProm() {
    return new Promise((resolve, reject) => {
        let condition = true;
        try {
        setTimeout(() => {
            if (condition) {
                resolve("true")
            } else {
                reject("false")
            }
        }, 2000);               

        } catch (error) {
            console.error(error);
        }
    });
}

myProm()




//VAL DI RITORNO = valore reso disponibile al termine della funz = 1
//bigInt = immagazina num >= 2**53
//NaN, infinity = numerico
