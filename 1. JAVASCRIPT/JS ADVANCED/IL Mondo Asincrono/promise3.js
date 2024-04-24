// 1 -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
// 2 -Utilizzare setTimeout per simulare un'operazione asincrona.

function checkAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if (age >= 18) {
            resolve("can drive")
        } else {
            reject("can not drive")
        } 
        }, 2000);
        
    })
}

checkAge(18)
.then((data) => console.log(data))
.catch((error) => console.log(error))