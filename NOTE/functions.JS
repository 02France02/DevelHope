
// function summ() {
//     var summ = 10 + 6;
//     return summ;
// }
// var tot = summ()
// console.log(tot)

// //POSSIAMO INSERIRE DEI PARAMETRI IN PARENTESI, E ASSEGNARLI MOLTEPLICI VALORI

// function summ( num1, num2 ) {
//     var summ = num1 + num2;
//     return summ;
// }
// var tot = summ(1, 2)
// var tot1 = summ(1, 2)
// var tot2 = summ(1, 2)
// var tot3 = summ(1, 2)
// console.log(tot)
// console.log(tot1)
// console.log(tot2)
// console.log(tot3)

// //POSSIAMO ANCHE METTERE IL CONSOLE.LOG DENTRO LA FUNCTION, E TOGLIERE RETURN

// function summ( num1, num2 ) {
//     console.log(num1 + num2);
// }
// summ(1, 2)
// summ(1, 2)
// summ(1, 2)
// summ(1, 2)

// //OPURE CON RETURN, MA PIU' BREVE

// function summ( num1, num2 ) {
//     return num1 + num2;
// }
// console.log(summ(1, 2));
// console.log(summ(1, 2));
// console.log(summ(1, 2));
// console.log(summ(1, 2));

// //CALLBACK, Queste istruzioni, come la funzione setTimeout che vedremo in questo video, richiedono come argomento di funzione... un'altra funzione!

function first(callback) {            //funzione principale

    setTimeout(function() {            //inserisco il ritardo con setTimeOut, poi console.log(arg. da stamp.),
        console.log(1);                  //l'argomento della 1° funzione e i Ms di ritardo.
        callback();
    }, 500);
}

function second() {               //funzione argomento alla prima
    console.log(2)
}

first(second)                     //chiamo la 1°funzione e inserisco la 2°, no ARGOMENTO, SI NOME FUNZIONE.



//ARROW FUNCTIONS

function normalFunc(arg1){      //esempio di una normale funzione
    return arg1 + 3;

}

//Funzionano come variabili, con l'aggiunta delle parentesi, similmente ad una normale funzione
//si aggiunge una FRECCIA (=>), non si usano le {}, 

var arrowFunc = (arg1) => arg1 + 3;                      //inutile il RETURN, PRESENTANO UN RITORNO IMPLICITO. 
console.log(arrowFunc(3))


//se la si vuole con il RETURN, usare le {}

let arrowFunc = (arg1, arg2) => {
       
    let sum = arg1 + arg2;
    return sum + 3;

}                       //inutile il RETURN, PRESENTANO UN RITORNO IMPLICITO. 

//da usare con le CallBack