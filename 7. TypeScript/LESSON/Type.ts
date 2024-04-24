// Variabile 'country' di tipo stringa
const country = "Italy";

// Variabile 'population' di tipo numero
const population = 60000000;

// Funzione 'double' con parametro 'x' di tipo numero
// e tipo di ritorno inferito come numero
function double(x: number) {
  return x * 2;
}

// Esempio di utilizzo della funzione 'double'
const result = double(5); // result è di tipo numero

console.log(country); // Output: Italy
console.log(population); // Output: 60000000
console.log(result); // Output: 10

// Variabile 'name' di tipo stringa
let name1: string = "John";

// Funzione 'multiply' con due parametri esplicitamente tipizzati
// e tipo di ritorno esplicitamente dichiarato come numero
function multiply(x: number, y: number): number {
  return x * y;
}


