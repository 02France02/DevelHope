//Convertire la seguente funzione basata su callback in una funzione basata su Promise.

// function callback_BasedFunction(arg1, arg2, callback) { 
//   setTimeout(() => { 
//   const result = arg1 + arg2; 
//   if (result % 2 !== 0) { 
//   callback(null, result); 
//   } else { 
//   callback(new Error('Result is not odd!'), null); } }, 1000);
//   }



function callback_BasedFunction(arg1, arg2) { 
    return new Promise((result, reject) => {

        setTimeout(() => { 
        const sum = arg1 + arg2; 
            if (sum % 2 !== 0) { 
                result("good")
            } else { 
                reject('Result is not odd!')
            } }, 1000);
    })
    }
    
callback_BasedFunction(5, 6)
.then((data) => console.log(data))
.catch((error) => console.log(error))