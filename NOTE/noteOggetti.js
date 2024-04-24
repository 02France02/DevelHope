let car = {                    //"car" sarebbe l'oggetto
    nam: " Punto ",          // "name" sarebbe la chiave e "Punto" il valore della key
    color: "white",
    size: 20

}

console.log(car["name"])          //si stamperà così per avere il valore della chiave ricercata
console.log(car["color"])


//per cambiare il valore di una key NUMERICA,  si fa così:
car["size"] = 22;
console.log(car["size"])

//si possono dare nuove chiavi dell'oggetto anhe fuori di esso.
car["weight"] = 1000;
console.log(car["weight"])

//posso vedere un elenco delle chiavi presenti nel suo interno con la funz. object.keys(oggetto)
console.log(Object.keys(car))


//Posso dare una funzione, tipo arg + somma
let car = {                    
    "nam": " Punto ",          
    "color": "white",
    "size": 20,
    "func": (arg) => arg + 2

}
console.log(car.func(10))

//Posso usare un oggetto, dentro un altro oggetto 
let car = {                    
    "nam": " Punto ",          
    "color": "white",
    "size": 20,
    "func": (arg) => arg + 2,
    "obj": {                        //Oggetto nell'oggetto
        "key": 2,
        "other": "ciao"
    }

}

//INCREMENTO O DECREMENTO DI UN VALORE NUMERICO DI UN OGGETTO con una funzione
let car = {                    
    nam: " Punto ",          
    color: "white",
    size: 20,
    sizeMore: function () {
        this.size++ //o this.zize--
    },
    
    obj: {                        
        key: 2,
        other: "ciao"
    },

}

car.sizeMore()            //si invoca la funzione nell'oggetto
console.log(car)

//OPERATORE IN, E CICLO FOR IN; 

let car = {                    
    "nam": " Punto ",          
    "color": "white",
    "size": 20,
    "func": (arg) => arg + 2,
    "obj": {                        
        "key": 2,
        "other": "ciao"
    }

}

//supponiamo di fare un calcolo, nella quale vogliamo prendere un numero dal nostro oggetto per sommargli un + 10,
// quindi così, console.log(car.size + 10), ma prima di fare ciò, verifichiamo se la key numerica è presente in oggetto

if("size" in car) {                       //l'operazione andrà fatta con in seguito da IN
    console.log(car.size + 10)
} else {
    console.log("size does not exist")
}


//se volessimo esaminare il nostro OBJ per scoprire le diverse chiavi che ha, ed usarle per fare riferimento ai diversi valori nell'oggetto
//In questo caso possiamo usare un LOOP, chiamato For In Loop.

for (const variable in car) {
    console.log(variable)
}


//CLONAZIONE E FUSIONE;
//Per la clonazione di un oggetto, senza alterare la stampa dell'altro, si usa sempre il ciclo FOR.

let user = {                        //OGGETTO 1
    name: "John",
    age: 30
  };

let clone = {}                      //OGGETTO 2, ma vuoto


for (let key in user) {             
    clone[key] = user[key]          //Bisogna eguagliare OGGETTO 1 a OGGETTO 2, le Quadre sono necessarie.
} 

clone.name = "gio";                 //si prende la Key da modificare e la si cambia

console.log(clone)                  //si stampano entrambi
console.log(user)

//ALTRO MODI DI CLONAZIONE
let obj = {
    ciao: "saluto",
    luce: "elettricità"
}

let newHello = Object.assign({}, obj)     //creo un nuovo oggetto, sulla base di OBJ

newHello.ciao = "goodmorning"             //cambio, dentro il nuovo oggetto, il valore

console.log(newHello)                       //faccio partire il nuovo oggetto
console.log(obj)


//VALORE VS RIFERIMENTO;



let car = {                    
    "nam": " Punto ",          
    "color": "white",
    "size": 20,
    
    "obj": {                        
        "key": 2,
        "other": "ciao"
    }

}

function changeNum(car, size, newnum) {         //Creo una funzione cambia valore, come PRAMETRI avrà(OGGETTO, CHIAVE, NUOVO VALORE)
    car["size"] = newnum;                       //modifico il Valore della mia key, assegnandoli il nuovo valore.
}

console.log(car.size)                           //prima della funzione, il valore è lo stesso

changeNum(car, "size", 15)                      //chiamata la funzione come parametri (OGGETTO, KEY, NUOVO VALORE), esso cambierà

console.log(car.size)                           //eseguita una prova, il valore della key sarà cambiato.



//FUNZIONI COSTRUTTRICI
//Il nome che si da, va iniziato con la lettera Maiuscola, 


function Car(nam, color, size, year) {
    this.nam = nam;
    this.color = color;
    this.size = size;
    this.year = year;
}

let car = new Car("punto", "white", "165 58 15", 2010 )    //NEW, si usa NECESSARIAMENTE, per le Func. Costruttive, lo si mette alla chiamata delle funzioni

console.log(car)

//In questo modo, potremmo assegnare più oggetti alla nostra funzione

let car2 = new Car("bravo", "black", 3 + " m", 2009 )

console.log(car2)


//OGGETTI IN OGGETTI CON FUNZIONI:

function ColorCar(color, color1, color2 ) {        //si stampa un'altra funzione oggetto costruttore, per poi immetterla dentro la seconda funzione
    this.color = color;
    this.color1 = color1;
    this.color2 = color2;
}


function Car(nam, color, size, year) {              //funzione oggetto principale
    this.nam = nam;
    this.color = color;
    this.size = size;
    this.year = year;
    this.speed = 0
    this.axell = function() {                        //aumento valore
        this.speed++
    }
    this.description = function() {                 //descrizione con un console.log
        console.log("car in working")            
    }
}



let yellow = new ColorCar("black", "yellow", "brown" )        //si crea una variabipe per la funzione  da mettere dentro l'oggetto principale

let car = new Car("punto", yellow, "165 58 15", 2010 )         //si inserisce la variabile nuova dentro la funzione oggetto principale.

console.log(car)

Car.axell()

car.description()

console.log(car)      //abbiamo 2 console perchè, il 1° ha stampato l'oggetto, il secondo ha stampato l'oggetto modificato dalla funzione axell()
 

//FUNZIONI DA ASSOCIARE AGLI OGGETTI

Object.assign({}, oggetto1)  //creerà un secondo nuovo oggetto, senza alterarne il primo

Object.freeze(oggetto)    //renderà l'ogetto non modificabile

Object.is(val1, val2)      //cercherà l'ugualianza tra due argomenti, simile ad ===