/* creaimo una funzione getData che accetta un parametro. Questa funzione restituisce una promise, 
se il parametro è un array la promise si risolve dopo 2 secondi inviando un array di oggetti che 
contengono le proprietà product name e totalSales, altrimenti la promise viene rigettata con il 
messaggio di errore "il parametro non è un array". Per risolvere la promise utilizzate async await. */

const products = [
  {
    name: "Product 1",
    sells: [
      { month: "January", sales: 150 },
      { month: "February", sales: 200 },
      { month: "March", sales: 180 },
    ],
  },
  {
    name: "Product 2",
    sells: [
      { month: "January", sales: 120 },
      { month: "February", sales: 170 },
      { month: "March", sales: 190 },
    ],
  },
  {
    name: "Product 3",
    sells: [
      { month: "January", sales: 100 },
      { month: "February", sales: 150 },
      { month: "March", sales: 130 },
    ],
  },
];

// function getData(data) {
//     return new Promise((resolve, reject) => {

//         let newArray = [];

//         setTimeout(() => {

//             if (Array.isArray(data)) {

//                 for (const product of data) {

//                     let sum = product.sells.reduce((a, num) => a + num.sales, 0)

//                     let result = {productName: product.name, totalSales: sum }

//                     newArray.push(result)

//                 }

//                 resolve(newArray)
//             } else {
//                 reject(new Error("passare un array"))
//             }
//         }, 2000)
//     })
// }

function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArray = [];

      if (Array.isArray(data)) {
        //inizio ciclo
        data.forEach((prod) => {
          let sum = prod.sells.reduce((a, num) => a + num.sales, 0);
          //dato che stiamo in un ciclo ad ogni iterazionme creerà un oggetto con le seguenti keys
          let result = { productName: prod.name, totalSales: sum };
          newArray.push(result);
        });

        resolve(newArray);
      } else {
        reject(new Error("passare un array"));
      }
    }, 2000);
  });
}

// async function startGetData() {
//   try {
//     const dataProm = await getData(products);
//     console.log(dataProm);
//   } catch (error) {
//     console.error(error);
//   }
// }
// startGetData();

/* creaiamo una funzione checkGames che accetta un parametro e restituisce una promise. 
Se il parametro è un array, la funzione si risolve dopo 1 secondo restituendo un array 
che contiene gli utenti che hanno tra i giochi preferiti Halo Infinite. altrimenti la 
promise viene rigettata con il messaggio 'il parametro non è un array'. Per risolvere 
la promise utilizzate async await. */

const users = [
  {
    username: "JohnDoe",
    favoriteGames: [
      "The Legend of Zelda: Breath of the Wild",
      "Red Dead Redemption 2",
      "Halo Infinite",
    ],
  },
  {
    username: "JaneSmith",
    favoriteGames: ["Overwatch", "Minecraft", "Animal Crossing: New Horizons"],
  },
  {
    username: "Gamer123",
    favoriteGames: [
      "Call of Duty: Warzone",
      "Assassin's Creed Valhalla",
      "Apex Legends",
    ],
  },
  {
    username: "PlayerX",
    favoriteGames: [
      "Cyberpunk 2077",
      "Halo Infinite",
      "The Witcher 3: Wild Hunt",
    ],
  },
  {
    username: "GameMaster",
    favoriteGames: [
      "Halo Infinite",
      "Super Mario Odyssey",
      "League of Legends",
    ],
  },
];

function checkGames(users) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Array.isArray(users)) {
        //restutuisce un array con l'oggetto che rispetta quelle condizioni
        let newArrayGames = users.filter((utente) =>
          utente.favoriteGames.includes("Halo Infinite")
        );

        resolve(newArrayGames);
      } else {
        reject(new Error("il parametro non è un array!"));
      }
    }, 1000);
  });
}

//   async function startUsersPromise() {
//     try {
//         const myUser = await checkGames(users)
//         console.log(myUser);
//     } catch (error) {
//         console.error(error);
//     }
//   }
//   startUsersPromise()

//2° VERSIONE

function checkGames(users) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Array.isArray(users)) {
        //creo un array
        let newArrayGames = [];
        //ciclo gli elementi dell'array users
        users.forEach((utente) => {
          //se il gioco preferito include halo
          if (utente.favoriteGames.includes("Halo Infinite")) {
            //allora pusha utente per ogni ciclo
            newArrayGames.push(utente.username);
            newArrayGames.push("Halo Infinite");
          } else {
            console.log("nessun utente ha questi giochi");
          }
        });

        resolve(newArrayGames);
      } else {
        reject(new Error("il parametro non è un array!"));
      }
    }, 1000);
  });
}

//   async function startUsersPromise() {
//     try {
//         const myUser = await checkGames(users)
//         console.log(myUser);
//     } catch (error) {
//         console.error(error);
//     }
//   }
//   startUsersPromise()








/* Devi sviluppare un'applicazione in JavaScript che simuli la gestione delle prenotazioni per un hotel.
Ecco cosa dovrebbe fare l'applicazione:

Gestione delle camere:

Definire un oggetto Room che rappresenta una camera dell'hotel. Ogni camera deve avere un numero, un tipo (singola, doppia, suite), 
e uno stato (libera, prenotata, occupata).
Gestione delle prenotazioni:

-Definire un oggetto Reservation che rappresenta una prenotazione di una camera dell'hotel. Ogni prenotazione deve avere un id, un cliente,
una data di check-in, una data di check-out e una camera associata.
-Definire una funzione makeReservation che accetta come parametri il nome del cliente, le date di check-in e check-out e il tipo di camera 
richiesto. 
-La funzione deve trovare una camera disponibile del tipo richiesto per le date specificate, creare una nuova prenotazione e 
aggiornare lo stato della camera in "prenotata".
-Definire una funzione getReservationsByDate che accetta come parametro una data e restituisce un array contenente tutte le prenotazioni 
per quella data.
Gestione delle disponibilità:

Definire una funzione checkAvailability che accetta come parametri le date di check-in e check-out e il tipo di camera richiesto.
 La funzione deve restituire true se c'è almeno una camera disponibile del tipo richiesto per le date specificate, 
 altrimenti restituire false.
Simulazione temporizzata:

Utilizzare setTimeout per simulare la pulizia delle camere e il cambio di stato da "occupata" a "libera" ogni 24 ore.
Utilizzare setInterval per simulare l'aggiornamento della disponibilità delle camere ogni 5 secondi.
Assicurati di gestire eventuali errori utilizzando try/catch e di includere commenti nel codice per spiegare le diverse parti.  */

let rooms = [
  {
    number: 1,
    type: "single",
    state: {
      free: true,
      busy: false,
      reserved: false,
    },
  },
  {
    number: 2,
    type: "double",
    state: {
      free: true,
      busy: false,
      reserved: false,
    },
  },
  {
    number: 3,
    type: "triple",
    state: {
      free: true,
      busy: false,
      reserved: false,
    },
  },
  {
    number: 4,
    type: "suite",
    state: {
      free: true,
      busy: false,
      reserved: false,
    },
  },
];

//Var numeri casuali come id
let randomNum = Math.round(Math.random() * 5);
//Definire un oggetto Reservation
let reservation = {
  id: randomNum,
  client: "",
  checkIn: "",
  checkOut: "",
  roomsNumber: 0
};
//array prenotazioni
let booking = [];

//Definire una funzione makeReservation con parametri: nome client, check-in, check-out, type room
function makeReservation(client, checkIn, checkOut, roomsType) {
  //Creo una var false che cambierà all'interno dell'if
  let isPresentEroom = false;
  //creo un for per iterarmi tutto l'array
  for (const room of rooms) {
    //se il tipo è uguale al par passato e lo stato della stanza è free
    if (room.type === roomsType && room.state.free === true) {
        //allora cambiami la var a true
        isPresentEroom = true
        //crea un obj da inserire nell'array Booking
        let reserve = {client: client, checkIn: checkIn, checkOut: checkOut, id: randomNum}
        //pusho l'oggetto nell'array
        booking.push(reserve)
        //cambio lo stato delle stanze nell'array rooms 
        room.state.free = false 
        room.state.reserved = true
        //fermo la creazione di stanze dopo la prioma
        break;
    } 

  }
  //if fuori il ciclo per non far ripertere continuamente l'errore
  //se la var è rimasta false
  if (isPresentEroom === false) {
        //allora camera non disponibile
        console.log("camera non disponibile");
  }
  
}

makeReservation("andrea", "12/02/24", "15/02/24", "single")
console.log(`La stanza è stata prenotata!`, booking);



/* funzione getReservationsByDate; Parametro: una data; Restituisce: array con tutte le prenotazioni per quella data. */
function getReservationsByDate(data) {
    let newReserve = [];
    if (data ) {
        
    } else {
        
    }
}
getReservationsByDate("21/02/2024");