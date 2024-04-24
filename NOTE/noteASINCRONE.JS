                         //SET TIMEOUT e SET INTERVAL
//SET TIMEOUT: possiamo ritardare la stampa di una funzione, normale o arrow

function test() {               //Funzione normale
    console.log("ciao")
}

setTimeout(test, 2000 ); //si mette il set, la chiamata della funz, ed i millisecondi



setTimeout(() => {
    console.log("ciao")      //SET con Arrow func, idem
}, 2000)



//SET INTERVAL: esegue costantemente una Funz, ma ad inytervalli di tempo regolari

function test1() {               //Funzione normale
    console.log("ciao")
}

setInterval(test1, 2000 );      //1°= funz, 2°=millisecondi che definiscono l'intervallo dopo il quale eseguire ogni volta la funzione

`Essa, da dei problemi, il never stop ed occuperà tanta memoria se non si ferma.
 Fortunatamente, ad ogni stampa lascia un ID, che salveremo in una variabile `

const id = setInterval(test1, 2000 );  

`ora dobbiamo far partire la funzione test1() ogni tot,  e ritardarla di 5-6 secondi, 
per poi stoppare il SetInterval`

setTimeout(() => {              //grazie al timeout, ritarderemo la fermata
    clearInterval(id)          //esso fermerà l'intervallo dell'id preso
}, 5000)

//ADESSO, USIAMO L'ARROWFUNCTION, creiamo una var che sarà ioncrementata ognio volta
let increase = 0;

const test = setInterval( () => {    //METTIAMO l'interval in una costante per prendere l'id
    increase++;                        //incrementiamo di 1 ad ogni ciclo
    console.log("ciao")
}, 2000)

setTimeout(() => {
    clearInterval(test)         //RIPETO, QUESTO SERVE PER CHIAMARE L'ID. Poi, e ritardare lo stop.
}, 5000);


                         


                                //CALLBACK //CALLBACK //CALLBACK 


`Sono delle funzioni passate come argomento ad altre funzioni, che vengono eseguite
quando la prima funzione ha terminato il suo compito`


function seyHello(name, callback) {             //FUNZ 1
    console.log(`hello, ${name}`);

    callback();                             //CallBack, mettere le tonde
}

function myCallback() {                     //FUNZ 2, ESTERNA
    console.log("i'm the callback")      
}

seyHello("mario", myCallback);          //FUNZ 1, (nome, FUNZ 2)      //come primo argomento, usiamo un NAME, poi passiamo la CALLBACK

                            //CALLBACK CON TIMEOUT

function seyHello(name, callback) {             //FUNZ 1
    setTimeout(() => {                          //timeout per ritardare il messaggio
       console.log(`hello, ${name}`);

        callback(); 
    }, 1000);
                                 
}

seyHello("mario", () => {               //NOME , FUNZ 2 Interna, messa come parametro
    console.log("i'm the callback")      //CallBack, mettere le tonde

});





                          //Gestire gli errori con le Callback


`E' fondamentale mostrare un errore, per dare all'utente l'esito dell'operazione che si sta compiendo.
Nel mondo adincrono, dato che ci sono una serie di operazioni che avvengono in contemporanea, in caso
di errore potrebbe rimanere bloccato in schermate di caricamento   `


//SINTASSI: in una FUNC, il 1° parametro è l'errore e il 2° è il dato di ritorno della callback.

//Verifichiamo se un utente è maggiorenne, in caso di False, ci sarà un errore

function checkAge(age, callback) {
    if(age >= 18) {
       callback(null, "ok")        //Caso di Successo, 1° null, 2° qualcosa, una stringa o altro
    } else {
        callback(new Error("età non valida"), null)     //non successo, 1° si dichiara un errore e si inserisce dentro la tipologia, 2° null, non si passa nulla
    }
    
}

checkAge(21, (error, result) => {              //Dichiariamo 2 parametri, che saranno i risultati di checkAge
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
})


                              //CASO CON TRY E CATCH

function checkAge1(age) {
    try {
        if(age >= 18) {
            console.log("ok")

        } else {
            throw new Error("Inserisci un'età adatta")
        }
            
    } catch (error) {
        console.error("18+ ", error)
    }
}

checkAge1(21)



                            

