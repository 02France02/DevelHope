/* Scrivi una funzione che prende un array di oggetti come parametro, ognuno dei quali rappresenta un libro con le seguenti proprietà: titolo, autore, anno e genere. La funzione dovrebbe restituire un array di stringhe che contiene il titolo e l'autore di ogni libro nel formato "titolo di autore". Se l'anno del libro è successivo al 2000, aggiungi " - Moderno" alla fine della stringa. Se il genere del libro è "Science Fiction", aggiungi " - SciFi" alla fine della stringa.
Stampa il nuovo array. */

const books = [
  {
    title: "Il nome della rosa",
    author: "Umberto Eco",
    year: 1980,
    gendre: "Giallo storico",
  },
  {
    title: "La divina commedia",
    author: "Dante Alighieri",
    year: 1320,
    gendre: "Epopea",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    gendre: "Science Fiction",
  },
  {
    title: "Il signore degli anelli",
    author: "J.R.R. Tolkien",
    year: 1954,
    gendre: "Fantasy",
  },
];

function printTitleAuthor(obj) {
  let newArr = [];
  for (const i of obj) {
    let autore = i.author;
    let titolo = i.title;
    let concat = titolo + " di " + autore;
    if (i.year > 2000) {
      concat = titolo + " di " + autore + "Moderno";
      if (i.gendre === "Science Fiction") {
      concat = titolo + " di " + autore + "Moderno" + " - SciFi";
      }
      
    }
    newArr.push(concat)
  }

  console.log(newArr);
}
printTitleAuthor(books);
