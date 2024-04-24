/* 1 In questo esercizio, come nel precendente andremo a simulare il caricamento di moduli di un veicolo spaziale in modo asincrono
    e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!
   2 ATTENZIONE : il caricamento dei moduli in questo esercizio non sempre potrebbe riuscire!
   3 Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare i 
     moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.
   4 Gestisci eventuali errori nel caricamento dei moduli stampando in console "Impossibile lanciare il veicolo spaziale a causa di
     errori nei moduli."
   5 Alla fine, se tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".
 */


function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(new Error(`Errore durante il caricamento del modulo ${modulo}.`));
      }
    }, tempoCaricamento);
  });
}

// implementa la funzione asincrona "lanciaVeicoloSpaziale" gestendo gli eventuali errori

async function lanciaVeicoloSpaziale() {

    try {
        const loadModuleA = await caricaModulo("A");
            console.log(loadModuleA);
        const loadModuleB = await caricaModulo("B");
            console.log(loadModuleB);
        const loadModuleC = await caricaModulo("c");
            console.log(loadModuleC);
        const final= "Veicolo spaziale pronto per il lancio!";
            console.log( final);
        
    } catch (error) {
        
        console.error(error);
    };
};

lanciaVeicoloSpaziale();

