// -La funzione caricamentoDati simula il caricamento di dati asincroni con un ritardo di 2 secondi!
// -Implementa la funzioneottieniDati utilizzando await per attendere il caricamento dei dati, quindi visualizza i dati ottenuti in console.


function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}


async function ottieniDati() {
    
    
    const dataRecived = await new caricamentoDati()
    console.log(dataRecived);

}

ottieniDati()