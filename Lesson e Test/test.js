// let num = 1;


// if (num > 0) {
//     console.log("positivo")
// }
// else if (num === 0) {
//     console.log("è pari a 0")

// }
// else {
//     console.log("negativo")

// }




// let num = 7;

// if (num % 2 === 0) {
//     console.log("pari")

// }
// else {
//     console.log("dispari")
// }







// const user = [{name: "Francesco", age: 21,}, 1] 

// if (user[0].age >= 18) {
//     console.log("drive")
// }
// else{
//     console.log("no drive")
// }









// // let vote  = 85;

// // if (vote >= 90) {
// //     console.log("A")
// // }
// // else if(vote <= 90 && vote >= 80) {
// //     console.log("B")
// // }
// // else if(vote <= 80 && vote >= 70) {
// //     console.log("c")
// // }
// // else {
// //     console.log("D")
// // }







// const age = 20;
// const drivingLicense = true;

// if (age >= 18 && drivingLicense === true) {
//     if (age >= 18 && drivingLicense === false) {
//         console.log("è maggiorenne ma non guida")
//     }
//     else {
//         console.log("guida")
//     }
// }
// else {
//     console.log(" can not drive")
// }





// const year = 2024;

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log("It is a leap year")
// } else {
//     console.log("not")
// }







// const parola = "radar";
// let isPalindromo = true;

// for (let i = 0; i < parola.length / 2; i++) {
//   if (parola[i] !== parola[parola.length - 1 - i]) {
//     isPalindromo = false;
//     break;
//   }
// }

// if (isPalindromo) {
//   console.log("La parola è un palindromo");
// } else {
//   console.log("La parola non è un palindromo");
// }










// const day = 4;

// if (day >= 1 && day <= 2 ) {
//     console.log("monday")
// }
// else if(day >= 2 && day <= 3) {
//     console.log("tuesday")
// }
// else if(day >= 3 && day <= 4) {
//     console.log("thursday")
// }
// else if(day >= 4 && day <= 5) {
//     console.log("tuesday")
// }








//OPERATORE TERNARIO

// let num = 1;

// let quest = num >= 0 ? "positive" : "negative";

// console.log(`The number is: ${quest}`)





// const num = 5;

// console.log( num % 2 === 0 ? "pari" : "dispari");







// const string = "ciao";

// const quest = string.length > 0 ? "piena" : "vuota";       //console.log(string? `la stringa è piena ${sring}` : "vuota")

// console.log(quest)






// let originalPrice = 50;

// let discount = 30;

// let discount1 = originalPrice / 100 * discount;

// let finalPrice = originalPrice - discount1;

// let quest = finalPrice < originalPrice ? "discount" : "not discount"

// console.log(finalPrice, quest)










// const a = 6;

// switch (a) {
//     case 1:
//         console.log(" monday")
//         break;
//     case 2:
//         console.log(" tuesday")
//         break;
//     case 3:
//         console.log(" wednesday")
//         break;
//     case 4:
//         console.log(" thursday")
//         break;
//     case 5:
//         console.log(" friday")
//         break;
//     case 6:
//         console.log(" saturday")
//         break;
//     case 7:
//         console.log(" sunday")
//         break;
//     default:
//         console.log("it is not a day's week")
//         break;
// }





// const veicle = "M";

// switch (veicle) {
//     case "M":
//         console.log("It is a moto")
//         break;
//     case "B":
//         console.log("It is a Bike")
//         break;
//     case "A":
//         console.log("It is  a Car")
//     default:
//         console.log("It isn't a veicle")
//         break;
// }









// let month = 1;

// switch (month) {
//     case 1:
//         if (month >= 1 && month <= 4 && month === 1) {
//             console.log("jenury, winter")
//         }
//     break;
//     case 2:
//         if (month >= 1 && month <= 4 && month === 2) {
//             console.log("february, winter")
//         }
//     break;
//     case 3:
//         if (month >= 1 && month <= 4 && month === 3) {
//             console.log("march, winter")
//         }
//     break;
//     case 4:
//         if (month >= 1 && month <= 4 && month === 4) {
//             console.log("april, spring")
//         }
//     break;
//     case 5:
//         if (month >= 5 && month <= 6 && month === 5) {
//             console.log("may, spring")
//         }
//     break;
//     case 6:
//         if (month >= 5 && month <= 6 && month === 6) {
//             console.log("june, spring")
//         }
//     break;
//     case 7:
//         if (month >= 7 && month <= 9 && month === 7) {
//             console.log("july, summer")
//         }
//     break;
//     case 8:
//         if (month >= 7 && month <= 9 && month === 8) {
//             console.log("august, summer")
//         }
//     break;
//     case 9:
//         if (month >= 7 && month <= 9 && month === 9) {
//             console.log("september, summer")
//         }
//     break;
//     case 10:
//         if (month >= 10 && month <= 12 && month === 10) {
//             console.log("october, autumn")
//         }
//     break;
//     case 11:
//         if (month >= 10 && month <= 12 && month === 11) {
//             console.log("november, autumn")
//         }
//     break;
//     case 12:
//         if (month >= 10 && month <= 12 && month === 12) {
//             console.log("december, winter")
//         }
//     break;
//     default:
//         console.log("nothing")
//     break;
// }

//OPPURE

// const numeroMese = 8;
// let stagione;

// switch (numeroMese) {
//   case 1:
//   case 2:
//   case 12:
//     stagione = "Inverno";
//     break;
//   case 3:
//   case 4:
//   case 5:
//     stagione = "Primavera";
//     break;
//   case 6:
//   case 7:
//   case 8:
//     stagione = "Estate";
//     break;
//   case 9:
//   case 10:
//   case 11:
//     stagione = "Autunno";
//     break;
//   default:
//     stagione = "Mese non valido";
// }

// console.log(stagione);








// let a = 5;
// let b = 5;
// let c = 5;



// switch (true) {
//     case a === b && b === c :
//         console.log("equilatero")
//         break;
//     case a !== b && b === c :
//         console.log("scaleno")
//         break;
    
//     default:
//         console.log("isoscele")
        
//         break;
// }





// let num = 0;

// for (i = 0; i < 5; i++) {
//      num = i + num;
    
// }

// console.log(num)







// for (i = 0; i < 20; i+=2) {
//     console.log(i)
// }



// let parking = [1, 2, 3, 4, 5, 6]


// for(let i = 0; i < parking.length; i++) {
//     let c = [parking[i]]
//     console.log(i, c) //Così, mi stampa i valori all'interno dell'arrey
//                        // così, il numero di valori al suo interno
// }









//RIPETIZIONE CALLBACK



// function printName(callback, ...a) {
//     let sum = a.reduce((a, num) => a + num, 0) 
    
//     callback(sum)
// }


// printName((result) => {
//     console.log("Mario", result)
// }, 5, 5, 6, 5)



//es 3.

// const rind = false;

// console.log("Incaming call");

// function printSomething(callback) {
    
//     setTimeout(callback, 2000);
    
// }

// function checkAnswer() {

//     if (rind === true) {
//         console.log("answer")
//     } else {
//         console.log("nothing")
//     }
// }

// printSomething(checkAnswer)







// 4



// function printArr(callback, ...arr) {
//     callback(arr);
// }

// function call(a) {
//     for ( i = 0; i < a.length; i++) {
//         const element = a[i];
//         console.log("elemento:", element)
//     }
// }

// printArr(call, 1, 2, 5, 6)


// function elaboraArray(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//       callback(array[i]);
//     }
//   }
  
//   function mioCallback(elemento) {
//     console.log("Elemento:", elemento);
//   }
  
//   const array = [1, 2, 3, 4, 5];
//   elaboraArray(array, mioCallback);






// function printArr(callback, ...arr) {
//     callback(arr);
// }

// function call(a) {

//      a.forEach(num => {
//          console.log("element:", num)
//     });
    
//     // console.log("elemento:", stamp)
        

// }

// printArr(call, 1, 2, 5, 6)


// const arr = {name: "Fra", surname: "Gion", age: 22}


// function name({name, age}, callback) {
//     if (name == "Fra" && age > 18) {
//         callback(age)
//     } else {
//         console.log("nothing to do")
//     }
    
    

// }



// function checkAge(age) {
//     return new Promise((resolve, reject) => {      //La sua sintassi
//         setTimeout(() => {
//             if (age >= 18) {
//                 resolve("passato");
//             } else {
//                 reject("bocciato");
//             };
//         }, 2000)
            
//     }); 
// };

// const check1 = checkAge(15).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })   







                //sommare con un ciclo forIn

let object = {
  a: 1,
  b: 2,
  b: 3
}

//sommare con il forIn

let accum = 0;

for (i in object) {         //per ogni elemento in obj
  
    accum += object[i]      //somma quell'elemento a 0
}
console.log(accum);


//sommare con il for



let arr = [1, 2, 3, 4, 5]

let accum1 = 0

for (i = 0; i < arr.length ; i++) {     //prendi ogni elemento per tutta la lunghezza dell'arrey
  accum1 += arr[i];                     //somma l'elemento singolo allo 0
  
}
console.log(accum1);




//sommare con il forOf

let accum2 = 0

for (i of object) {
  
}