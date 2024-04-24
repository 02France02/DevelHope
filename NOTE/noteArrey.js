//A differenza degli oggetti, negli Arrey i valori sono ordinati

//OGGETTO, NON ORDINATO (es,car), possiamo vederlo come una macchina da inserire in un parcheggio(ovvero un arrey)
let car = {
    color: "black",
    name: "punto",
    model: "fiat",
}

//per accedere ai suoi valori si usa:
console.log(car.color)    //con il "." o "[]"

//ARREY, ORDINATO, (es a parking)
let parking = [car, "val2", "val3", [5, 5], {key: 4}, true] //qualsiasi tipo di dato può entrare in un arrey.  

//per accedere ai valori degli arrey, si usa:
console.log(parking[0])
//gli arrey partono come indice 0 assegnato al primo valore, poi vanno a seguire con 1 2 3 ecc

//POASSIAMO sapere QUANTI VALORI CI SONO in un arrey con:
console.log(parking.length)

// Ora ci può esser d'aiuto il ciclo for
for(let i = 0; i < parking.length; i++) {
    console.log(parking[i]) //Così, mi stampa i valori all'interno dell'arrey
    console.log(i)          // così, il numero di valori al suo interno
}

//Modificare un arrey:
parking[1] = "ciao";  

//AGGIUNTA DI UN SINGOLO VALORE ALLA FINE DELL'ARREY 
parking.push("valore") 

//RIMUOVERE L'ULTIMO ELEMENTO DI UIN ARREY
let remove = parking.pop() // lo si mette dentro una variabile in caso ci dovesse servire il valore cancellato

//INSERIRE ELEMENTI AL PRIMO POSTO
parking.unshift("value")

//RIMOZIONE ELEMENTI AL PRIMO POSTO
parking.shift()

//RIPOZIONE SPECIFICA DI UN VALORE
parking.splice(1, 2) //1 sarebbe l'indice del valore e 2 sarebbe quanti valori rimuovere dopo l'1

//CONVERTE IN STRINGA L'ARREY E POSSIAMO METTERE DELLO SPAZIO O PUNTEGGIATURA FRA OGNI VALORE
parking.join(", "); 