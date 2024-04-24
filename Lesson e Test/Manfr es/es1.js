/* creiamo una funzione fizzBuzz, questa funzione deve ciclare i numeri da 1 a 100, 
se il numero su cui sta ciclando è multiplo di 3 viene stampata in console la stringa fizz, 
se è multiplo di 5 stampa in console la stringa buzz, se è multiplo di entrambi allora stampa fizzbuzz */

const number = 100;

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //la sintassi di entrambi va messa all'inizio, perchè js funziona a cascata, e prenderebbe prima le altre.
      console.log(i, "fizzbuzz");
    } else if (i % 5 === 0) {
      console.log(i, "buzz");
    } else if (i % 3 === 0) {
      console.log(i, "fizz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(number);

//verifica palindromo
const str1 = "otto";

let rev = str1.split("").reverse().join(""); //SPLIT= Separa la parola o lettere con spazi o punteggiatira, REVERSE= capovolge la parola,  JOIN= UNISCE

console.log(rev);

//OPPURE
function palindrm(str) {
  let isPalindromo = true;

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isPalindromo = false;
      break;
    }
  }

  if (isPalindromo) {
    console.log("La parola è un palindromo");
  } else {
    console.log("La parola non è un palindromo");
  }
}
palindrm("otto");


//Funzione verifica duplicati in un arrey di numeri

const numbersArr = [1, 2, 3, 4, 5, 5, 6];

function checkDuplicates(arr) {
  const newArr = []; //crea un nuovo arrey

  arr.forEach((num) => {
    //Se newArr non contiene il singolo numero
    if (!newArr.includes(num)) {
      newArr.push(num); //allora pusha quel numero
      //e se lo include, quel numero è un duplicato
    } else {
      console.log(`${num} è un duplicato`);
    }
  });

  //posso usare un altro metodo con SET
  let noDupl = new set(arr);
  if (arr.length === Array.from(noDupl).length) {
    //il set non è un arrey, quindi il confronto della lunghezza non vale. Per questo si usa Arrey.from, che lo trasforma in un arrey
    console.log("duplicati");
  } else {
    console.log("No duplicati");
  }
}
checkDuplicates(numbersArr);

//METODO SET: immette gli elementi in un oggetto, ma se ci sono valori duplicati non verranno contati
