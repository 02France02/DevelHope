`◘Crea una funzione chiamata somma che accetta un numero qualsiasi di 
 argomenti e restituisce la somma di tali argomenti.
 ◘Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in 
 console l'output della funzione somma.`

 function somma(...numSom) {
    return numSom.reduce((a, number) => a + number, 0)
 }

 const numbs = somma(3, 2, 8, 5, 8, 2, 4, 5)
 console.log(numbs)