//Implementa la funzione lanciaDadi che:

// 1 Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
// 2 Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
// 3 Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
// 4 Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."

function lanciaDadi() {
    let casual = Math.floor(Math.random()*7);        //math.flor serve per arrotondare il numero e Math.random per un numero randomico da 0 a 6, scrivendo 7. 
    let casual1 = Math.floor(Math.random()*7);

    console.log(`Dado 1 = ${casual}; Dado 2 = ${casual1}`);
};

console.log("Lancio dei dadi in corso...");

setTimeout(lanciaDadi, 2000);