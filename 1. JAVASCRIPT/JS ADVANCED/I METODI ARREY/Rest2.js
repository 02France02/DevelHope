`◘Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di 
 argomenti e restituisce un array contenente solo i numeri pari.
 ◘Utilizzare il parametro rest per raccogliere gli argomenti.`

 function filterOutOdds(...paramets) {
    return paramets.filter(paramets => paramets % 2 === 0 )
 }

 console.log(filterOutOdds(1, 5, 9, 3, 4, 6, 2, 8))