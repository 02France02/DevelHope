/*  -----------------------------------------------------------------------------------------------
                                     IL LOCAL-STORAGE e IL FETCH API  
    --------------------------------------------------------------------------------------------------- */

/* 
Quando Svilupperemo App Web, vogliamo mantenere i dati tra le sessioni o tra i rafrash delle pag.                 
SONO presenti 2 Metodi di Local Storage. Entrambi permettono di salvare dati all'interno del browser, ma con durate e scopi diversi:
-♦SESSIONSTORAGE: conserva i dati solo per la DURATA della sessione di una SPECIFICA TAB, cancellando le informazioni una volta chiusa.
                 -sessionStorage.setItem("KEY", value) => Per la SCRITTURA
                 -sessionStorage.getItem("KEY", value) => Per la LETTURA
                 -POSSO salvare solo STRINGHE (un obj,  va convertito con JSON.stingyfy)
                 -Lo si può vedere da APPLICATION sui Dev Tools, Esso si comporterà come un OBJ, avrà una KEY ed un VALUE
                 
-♦LOCALSTORAGE: persiste i dati anche dopo la chiusura del browser o l'apertura di nuove tab, EX:(salvo un dato, chiudo il browser, lo riapro e lo trovo).
               -Lo si può vedere da APPLICATION sui Dev Tools, Esso si comporterà come un OBJ, avrà una KEY ed un VALUE
               -Per salvare un dato, Va data una KEY ed un VALUE univoci */

//♦SESSION-STORAGE (vincolo alla TAB)

const btn = document.querySelector(".my-btn");

function setUsername(username) {
  const usernameEl = document.querySelector(".my-username");

  usernameEl.innertText = username;
  //FASE SCRITTURA: nome su cui stiamo operando
  sessionStorage.setItem("my-username", username);
}

//Al click di un button, cambia il titolo con il nome inserito
btn.addEventListener("click", () => {
  const input = document.querySelector(".my-input");
  const value = input.value;

  setUsername(value);
});

//FASE LETTURA: ritorna il val del sessionStorage che abbia come chiave il valore passato
//Ritorna NULL se non trova la key
const savedUsername = sessionStorage.getItem("my-username");

//Verifichiamo se il GETITEM esiste, in tal caso al REFRASH della PAG, il nome apparirà ancora
if (savedUsername) {
  //chiamo la funzione e passo come argomento l'username recuperato
  setUsername(savedUsername);
}

//♦LOCAL-STORAGE (vincolo al DOMINIO)

const btn1 = document.querySelector(".my-btn");

function setUsername(username) {
  const usernameEl = document.querySelector(".my-username");

  usernameEl.innertText = username;
  //FASE SCRITTURA: nome su cui stiamo operando
  localStorage.setItem("my-username", username);
}

//Al click di un button, cambia il titolo con il nome inserito
btn.addEventListener("click", () => {
  const input = document.querySelector(".my-input");
  const value = input.value;

  setUsername(value);
});

//FASE LETTURA: ritorna il val del localStorage che abbia come chiave il valore passato
//Ritorna NULL se non trova la key
const savedUsername1 = localStorage.getItem("my-username");

//Verifichiamo se il GETITEM esiste, in tal caso al REFRASH della PAG, il nome apparirà ancora
if (savedUsername1) {
  //chiamo la funzione e passo come argomento l'username recuperato
  setUsername(savedUsername1);
}
//METHOD CLEAR
/* Possiamo usare anche il METODO localStorage.CLEAR() o sessionStorage.CLEAR(), aggiungendo un ALTRO bottono all'HTML. */
const clearButton = document.querySelector(".my-clear-button");
clearButton.addEventListener("click", () => {
  sessionStorage.clear();
  //o
  localStorage.clear();
});

/*  -----------------------------------------------------------------------------------------------
                                     IL METODO FETCH e le PROMISES
    --------------------------------------------------------------------------------------------------- */

/* 
Le app necessitano di comunicare con i SERVER REMOTI per ottenere, inviare o aggiornare dati. Queste comunicasioni sono le CHIAMATE DI RETE.
Con FETCH, Possiamo Effettuare CHIAMATE di RETE in JavaScript, per OTTENERE dati da un SERVER remoto. A ciò, andranno aggiunte le PROMISE,
per Gestire Operazioni Asincrone.
-♦FETCH: serve per fare chiamate di rete SINTASSI:*/ fetch("URL", {method: "GET (di defoult)", method: "POST",});





/* STEP 1 */ /* INTERROGAZIONE API
-Dalle APP partono delle CHIAMATE DI RETE verso un SERVER REMOTO.
-IL SERVER, per riceverle, USA degli URL(api). 
-Per ogni API, vi è la sua DOCUMENTAZIONE, con istruzioni e uso,  nella quale è presente L'URL della CHIAMATA
 ed il suo METODO, POST(invio di dati) o GET(prende i dati)
*/

//Chiamiamo L'API ed usiamo il Then per stampare la PROMISE in CONSOLE
fetch("https://api.potterdb.com/v1/books")
  .then((response) => {
    //PER AVERE l'oggetto con I LIBRI CHE SERVE, si Usa JSON(), a sua volta avrà un THEN() perchè ritorna una nuova PROMISE
    return response.json();
  })
  //legge la nuova promise json(), ed in console da un OBJ, con data, links e meta
  .then((responseJson) => console.log(responseJson));

/* LO RISCRIVO USANDO ASYNC E AWAIT */
async function fetchData() {
  //GESTIONE ERRORI
  try {
    //Chiamiamo L'API ed usiamo il Then per stampare la PROMISE in CONSOLE
    const response = await fetch("https://api.potterdb.com/v1/books");
    //PER AVERE l'oggetto con I LIBRI CHE SERVE, si Usa JSON()
    const responseJson = await response.json();
    console.log(responseJson);

  } catch (error) {
    console.error(error);
  }
}
fetchData();



/* STEP 2 *//* ESTRAZIONE DATI DALL'OGGETTO DELL'API
-Nell'OBJ dell'API, dobbiamo prendere DATA, Esso è un Array con oggetti
-Prendiamo l'indice di corrispondenza nell'array che ci serve
-Ottengo un OBJ,  con altri oggetti, quali attributi ed altro.
-Ora, dobbiamo puntare quello che serve dentro l'OBJ ATTRIBUTES*/

async function fetchData() {
    try {

      const response = await fetch("https://api.potterdb.com/v1/books");
      const responseJson = await response.json();
      //Prendo il libro nell'array di data Dell'API
      const book = responseJson.data[0];

      //Prendo il titolo e cover del libro 
      const titleBook = book.attributes.title;
      const coverBook = book.attributes.cover;
      
      //in console, con responseJson.data[0], ottengo un OBJ,  con tutti i suoi attributi 
      console.log(book);
      //Avremo il titolo e l'URL della cover
      console.log(titleBook, coverBook);

    } catch (error) {
      console.error(error);
    }
  }
fetchData();

/* Possiamo usare la DESTRUTTURAZIONE, che crea 2 variabili OBJ,  e prende i dati dalla stessa fonte */
async function fetchData() {
    try {
      const response = await fetch("https://api.potterdb.com/v1/books");
      const responseJson = await response.json();
      const book = responseJson.data[0];
      //DESTRUTTURAZIONE
      const {titleBook, coverBook} = book.attributes.title;
      console.log(titleBook, coverBook);

    } catch (error) {
      console.error(error);
    }
  }
fetchData();



/* STEP 2 *//* ESTRAZIONE DATI DALL'OGGETTO DELL'API 
-Puntare gli elementi nell'HTML da assegnare*/

async function fetchData() {
    try {

      const response = await fetch("https://api.potterdb.com/v1/books");
      const responseJson = await response.json();
      //Prendo il libro nell'array di data Dell'API
      const book = responseJson.data[0];

      //Prendo il titolo e cover del libro 
      const {titleBook, coverBook} = book.attributes.title;

      //Puntare gli elementi nell'HTML da assegnare
      const h1 = document.querySelector("#h1")
      const img = document.querySelector("#img")

      //modifico il contenuto
      h1.innertText = titleBook;
      //modifico l'attributo dell'img con setAttribute
      img.setAttribute("src", coverBook);
      
    } catch (error) {
      console.error(error);
    }
  }
fetchData();