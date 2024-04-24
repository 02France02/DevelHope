// 1 Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, 
// catturalo e gestiscilo.
// 2 Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.


// function performOperation(a, b, callback) {
//    if (a + b > 18) {
//     callback(null)
//    } else {
//     callback( new Error("not 18"))
//    }
// }

// function displayResult(result) {
//    if ( result ) {
//     console.log(result)

//    } else {
//     console.log("ok")
//    }
// }

// performOperation(5, 3, displayResult);







//errore callback con try e catch,  ma è inutile. Posso farlo senza callback




function checkNum(a, b, callback) {
   let sum = a + b;
   try {
      if (a === Number(a) && a  !== NaN && a  !== Infinity &&      //verifica se un numero sia realmente un numero
          a !== -Infinity && b === Number(b) && b !== NaN && 
          b  !== Infinity && b  !== -Infinity) {

         callback(null, `The addiction is ${sum}`)
      } else {
         throw new Error("insert a correct number")
      }
   } catch (error) {
      callback(error, null)
   }
   
}

function catchError(error, result) {
   if (error) {
      console.error(error)
   } else {
      console.log(result)
   }
}

checkNum(1, "ciao", catchError)