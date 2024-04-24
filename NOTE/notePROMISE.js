                        //LE PROMISE 

`E' un oggetto che rappresenta il completamento o fallimento di uin operazione asincrona,
 inm caso di completamento, ci fa ottenere il valore risultante`

//Non serve la callback, va dentro una funzione
function checkAge(age) {
    return new Promise((resolve, reject) => {      //La sua sintassi
        setTimeout(() => {
            if (age >= 18) {
                resolve("passato");
            } else {
                reject("bocciato");
            };
        }, 2000)
            
    }); 
};

const check = checkAge(19);   //RISULTATO = pending (perchè mancano ancora il .then e .catch)
console.log(check);

//LA PROMISE PUO' AVERE 3 STATI:
                             //PENDING: in attesa, stato iniziale, non è ne respinta e ne accettata
                             //FULFILLED: soddisfatta, completata con successo, viene chiamato Resolve
                             //REJECTED: respinta, quando sta un errore, viene chiamato reject


function checkAge(age) {
    return new Promise((resolve, reject) => {      //La sua sintassi
        setTimeout(() => {
            if (age >= 18) {
                resolve("passato");
            } else {
                reject("bocciato");
            };
        }, 2000)
            
    }); 
};

const check1 = checkAge(19).then((data) => {     //.then e .catch, servono per restituire il risultato o l'errore.
    console.log(data);
}).catch((error) => {
    console.log(error);
})   




                                //PROMISES API

/* Le API servono per eseguire contemporaneamente più promise, lo si può fare con: */


                                //PROMISE.ALL

Promise.all([]);  //Nelle tonde va un Arrey contenente tutte le promise da eseguire insieme.
                  //Il risultato verra ritornato solo quando entrambe sono complete

//SINTASSI COMPLETA:
Promise.all([myFirstPromise(), mySecondPromise()])
.then((data) => {                                   //Andranno fuori le parentesi tonde
    console.log(data);
}).catch((error) => {
    console.log(error);
}); 



                                //PROMISE.RACE

Promise.race([])  //Sempre con un arrey, RACE serve per ritornare solo il valore della prima promise completata per DELAY


//SINTASSI COMPLETA:
Promise.race([myFirstPromise(), mySecondPromise()])
.then((data) => {                                   //Andranno fuori le parentesi tonde
    console.log(data);
}).catch((error) => {
    console.log(error);
}); 
