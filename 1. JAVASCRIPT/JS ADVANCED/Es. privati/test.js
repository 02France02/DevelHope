/* Crea una funzione salesData che accetta un array di prodotti e ci dice la media di vendita di ogni prodotto e il mese in cui ha venduto di più.  
   La funzione restituisce una promise, se il parametro passato alla funzione è un array la promise si risolve dopo 1 secondo restituendo un array
   di oggetti con le proprietà bestMonth e averageSales che rappresentano il mese con le vendite maggiori di quel prodotto e la media delle vendite. 
   Se non viene passato un array la promise viene rigettata e compare l'errore 'passare un array'
*/

const products = [
  {
    name: "Product A",
    sells: [
      { month: "January", sales: 150 },
      { month: "February", sales: 200 },
      { month: "March", sales: 180 },
    ],
  },
  {
    name: "Product B",
    sells: [
      { month: "January", sales: 120 },
      { month: "February", sales: 170 },
      { month: "March", sales: 190 },
    ],
  },
  {
    name: "Product C",
    sells: [
      { month: "January", sales: 100 },
      { month: "February", sales: 50 },
      { month: "March", sales: 200 },
    ],
  },
  {
    name: "Product D",
    sells: [
      { month: "January", sales: 135 },
      { month: "February", sales: 150 },
      { month: "March", sales: 210 },
    ],
  },
  {
    name: "Product E",
    sells: [
      { month: "January", sales: 90 },
      { month: "February", sales: 180 },
      { month: "March", sales: 250 },
    ],
  },
];

/* questo è l'array che devi utilizzare  */

// function salesData(products) {
//   //creo un array vuoto, nella quale pusherò l'oggetto
//   let newArray = [];

//   //creo due var da modificare ogni iterazione per il mese e per la vendita
//   let month;
//   let high;
//   //creo l'oggetto con le key da colpletare e da pushare nell'array
//   let newObj = { bestMonth: "", averageSales: null };
//   //var somma
//   let sum = 0;
//   //creo il primo for per i prodotti
//   for (i = 0; i < products.length; i++) {

//     //calcolo media = somma + lunghezza array SELLS
//     //var per il singolo prodotto
//     let singleProduct = products[i].sells;

//     //creo il secondo for per le vendite dei prodotti
//     for (j = 0; j < singleProduct.length; j++) {
//       //var per le vendite dei prodotti
//       let singleSell = singleProduct[j];

//       //incrementa la var ad ogni iterazione del 2° ciclo
//       sum += singleSell.sales;

//       let avg = sum / singleProduct.length;
//       //inserisco avg nella key dell'oggetto
//       newObj.averageSales = avg;

//       if (singleSell.sales > high) {
//         high = singleSell.sales;
//         month = singleSell.month;
//       }
//     }

//   }
//   console.log(newObj);
// }
// salesData(products);

// Array.isArray(array)

// function salesData(products) {

//   return new Promise((resolve, reject) => {

//     if (Array.isArray(products)) {

//       setTimeout(() => {
//         let finalSalesData = [];
//         for (let product of products) {
//           //ogni prod ha la sua variabile
//           let bestMonthlySales = 0;
//           let bestMonthValue = "";

//           let totSal = 0;

//           for (let sell of product.sells) {
//             totSal += sell.sales;

//             if (sell.sales > bestMonthlySales) {
//               bestMonthlySales = sell.sales;
//               bestMonthValue = sell.month;
//             }

//           }
//           let avg = Math.round(totSal / product.sells.length);

//           let result = {bestMonth: bestMonthValue, averageSales: avg}
//           finalSalesData.push(result)
//         }

//        resolve(finalSalesData);

//       }, 1000);

//     } else {
//       reject(new Error("passare un array"));
//     }
//   });
// }

// salesData(products)
// .then(data => console.log(data))
// .catch(error => console.error(error))

function salesData(products) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //verifico se l'array passato è un array
      if (Array.isArray(products)) {
        //creo un array per pushare all'interno un oggetto
        let finalArray = [];

        //var somma

        //1°forOf per iterare i prodotti
        for (const prodotto of products) {
          //creo var mese, vendita per ogni prodotto
          let migliorMese = "";
          let migliorVendita = 0;
          let sum = 0;
          //2°forOf per iterare la singola vendita di ogni prodotto
          for (const vendita of prodotto.sells) {
            //somma delle vendite mensili ad ogni iterarazione dei valori di sells
            sum += vendita.sales;

            //if per associare il miglior mese e la miglior vendita
            if (vendita.sales > migliorVendita) {
              migliorVendita = vendita.sales;
              migliorMese = vendita.month;
            }
          }
          //media delle vendite per ogni sells
          let avg = Math.floor(sum / prodotto.sells.length);
          //oggetto con proprietà nuove
          let result = {
            bestMonth: migliorMese,
            bestSales: migliorVendita,
            averageSales: avg,
          };
          //push nel nuovo array
          finalArray.push(result);
        }

        resolve(finalArray);
      } else {
        reject(new Error("Passare un array"));
      }
    }, 1000);
  });
}

// salesData(products)
// .then(data => console.log(data))
// .catch(error => console.error(error))

function salesData(prodotti) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Array.isArray(prodotti)) {
        let newPoducts = [];

        prodotti.forEach((prodotto) => {
          let migliorMese = "";
          let migliorVenditaMensile = 0;
          let sum = 0;
          for (const vendita of prodotto.sells) {
            sum += vendita.sales;
            if (vendita.sales > migliorVenditaMensile) {
              migliorMese = vendita.month;
              migliorVenditaMensile = vendita.sales;
            }
          }

          let avg = Math.round(sum / prodotto.sells.length);
          let pushObj = {
            bestMonth: migliorMese,
            bestSales: migliorVenditaMensile,
            averageMonthly: avg,
          };
          newPoducts.push(pushObj);
        });

        resolve(newPoducts);
      } else {
        reject(new Error("passare un array"));
      }
    }, 1000);
  });
}

// async function startProm() {
//   try {
//     const ecommerce = await salesData(products);
//     console.log(ecommerce);
//   } catch (error) {
//     console.error(error);
//   }
// }
// startProm();












/**
 Simulazione di un Sistema di valutazione produttività dei dipendenti

 
TODO creare una funzione che restituisce una Promise che, dopo qualche secondo di simulazione (simulando una richiesta al server),
restituisce un nuovo array di oggetti con le seguenti proprietà:
-dipendente: Nome del dipendente.
-media: Media della produttività per quel dipendente
*
TODO creare una funzione che restituisce una Promise che, dopo qualche secondo di simulazione (simulando una richiesta al server),
inserisce una nuova voce
*
TODO creare una funzione per eliminare una voce
*

*/


let valutazioniDipendenti = [
  {
    dipendente: "Alice",
    valutazioni: [
      { progetto: "Implementazione Feature X", punteggio: 8 },
      { progetto: "Ottimizzazione Codice", punteggio: 7 },
      { progetto: "Gestione Bug", punteggio: 6 },
    ],
  },
  {
    dipendente: "Bob",
    valutazioni: [
      { progetto: "Ricerca Nuove Tecnologie", punteggio: 9 },
      { progetto: "Sviluppo App Mobile", punteggio: 7 },
      { progetto: "Analisi Dati", punteggio: 8 },
    ],
  },
  {
    dipendente: "Charlie",
    valutazioni: [
      { progetto: "Miglioramento Interfaccia Utente", punteggio: 6 },
      { progetto: "Testing Automatizzato", punteggio: 7 },
      { progetto: "Deployment Continuo", punteggio: 8 },
    ],
  },
];

function checkValutation(dipendenti) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Array.isArray(dipendenti)) {
        let newArr = [];
        for (const dipendente of dipendenti) {
          let nomelavoratore = dipendente.dipendente;

          let sum = dipendente.valutazioni.reduce(
            (a, num) => a + num.punteggio,
            0
          );

          let avg = sum / dipendente.valutazioni.length;
          let result = { WorkerName: nomelavoratore, averageWorker: avg };
          newArr.push(result);
        }

        resolve(newArr);
      } else {
        reject("nulla per ora");
      }
    }, 2000);
  });
}

function insertNewUser(
  name,
  prog1,
  prog2,
  prog3,
  punteggio1,
  punteggio2,
  punteggio3,
  dipendenti
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Array.isArray(dipendenti)) {
        let newObj = {
          dipendente: name,
          valutazioni: [
            { progetto: prog1, punteggio: punteggio1 },
            { progetto: prog2, punteggio: punteggio2 },
            { progetto: prog3, punteggio: punteggio3 },
          ],
        };
        dipendenti.push(newObj);
        resolve(dipendenti);
      } else {
        reject("errore");
      }
    }, 3000);
  });
}

function deleteWorkers(dipendente) {
  setTimeout(() => {
    let start = false;
    valutazioniDipendenti.forEach((dipend) => {
      if (dipendente === dipend.dipendente) {
          start = true;
          let newDip = valutazioniDipendenti.filter(
          (dip) => dip.dipendente !== dipendente
          
        );
        
        //riassegno la valutazioneDipendenti al filter
        valutazioniDipendenti = newDip;

        console.log("licenziamento");
        
      }
        
      
    });
     if (start === false) {
        console.log("nessun licenziamento")
      }
    console.log(valutazioniDipendenti);
  }, 4000);
}

// deleteWorkers("Bob");

async function startMyPromise() {
  try {
    const startDipendenti = await checkValutation(valutazioniDipendenti);
    console.log(startDipendenti);

    const insert = await insertNewUser(
      "pluto",
      "pc",
      "build",
      "car",
      85,
      54,
      99,
      valutazioniDipendenti
    );
    console.log(insert);

  } catch (error) {
    console.error(error);
  }
}
// startMyPromise();




function salesData(products) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Array.isArray(products)) {
        //creo un nuovo array per pusghare dentro l'oggetto con le key richieste
        let otherArray = [];
        //creo un loop che mi itera tutti gli indici dei prod
        for (const singleProd of products) {
          //per ogni prodotto creo var migliorMese e migliorVendita
          let migliorMese = "";
          let migliorVendita = 0;
          //var somma di ogni prodotto per media
          let sum = 0;
          //creo un secondo loop per le vendeite nei prodotti
          for (const singleSell of singleProd.sells) {
            //somma delle vendite di ogni mese.
            sum += singleSell.sales
            //ora calcoliamo la miglior vendita e il miglior mese
            if(migliorVendita < singleSell.sales) {
              migliorVendita = singleSell.sales
              migliorMese = singleSell.month
            }
            
          }
            //Facciamo la media delle vendite di ogni prodotto
            let avg = sum / singleProd.sells.length
            //faccio l'oggetto con le proprietà 
            let result = {bMonth: migliorMese, bSale: migliorVendita, averag:avg}
            //push dell'oggetto dell'array
            otherArray.push(result)


        }


        resolve(otherArray)
      } else {
        reject("nillll")
      }
    }, 1000);
  })
}




// async function startPro() {
//   try {
//     const dati = await salesData(products)
//   console.log(dati);
//   } catch (error) {
//     console.error(error);
//   }
  
// }
// startPro()




function salesCalc(products) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Array.isArray(products)) {
        let arrPush = []
        for (const i  of products) {
          let sum = i.sells.reduce((a, b) => a + b.sales, 0)
          let result = {sum: sum, calcia: i.name}
          arrPush.push(result)
        }
        resolve(arrPush)
      } else {
        reject()
      }
    }, 1000);
  })
}

async function startCalc() {

  try {
    const calc = await salesCalc(products)
  console.log(calc);
  } catch (error) {
    console.error(error);
  }

  
}
startCalc()