`1 Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API.
 -Implementare una callback per gestire i dati recuperati. 
 -Utilizzare setTimeout per simulare il ritardo dell'operazione.`
 
 
 
 function fetchDataFromAPI(callback) {
  callback({ name: "John", age: 30 }) ;

}

function handleData(data) {
  setTimeout(() => {
    console.log("data recived " + JSON.stringify(data))
  }, 3000);
}

fetchDataFromAPI(handleData);





//or


function fetchDataFromAPI(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 }
        callback(data)
      }, 3000);
  }
  
  function handleData(data) {
    
      console.log("data recived " + JSON.stringify(data))   //metoto per concatenare  un oggetto ad una stringa
    
  }
  
  fetchDataFromAPI(handleData);
  
  
  