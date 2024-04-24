// 1 Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una 
// migliore gestione degli errori.
// 2 La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

const user = { name: "Piero", age: 20 };

function fetchDataFromAPI(obj) {
    //creo la promise
  return new Promise((resolve, reject) => {
    //creo il delay
    setTimeout(() => {
        if (obj.name !== 0 && typeof obj.name === "string" && typeof obj.name !== "number" && obj.age >= 30 && typeof obj.name !== "boolean") {
            resolve("correct name length and age ");
        } else {  
            reject("insert a correct name length or a correct age");
        }
    }, 2000); //millisecondi
  })
}

fetchDataFromAPI(user).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error);
})









const user = { id: 1, name: "John" };
const post = ["Post 1", "Post 2", "Post 3"];

function fetchUserData() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (user.id === 1 && user.name === "Jhon" ) {
            resolve("Data restored" + JSON.stringify(user))
        } else {
            reject("data not found")
        }
    }, 2000)
    })
    
  }

  
  function fetchUserPosts(userId, userName) {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (userId === 1 && userName === "Jhon") {
                resolve("post restored " + post)
            } else {
                reject("post not found")
            }
        }, 4000)
    })
  }


  
  fetchUserData().then((data) => {
    console.log(data)
  }).catch((error) => {
    console.log(error)
  })


  fetchUserPosts(user.id, user.name).then((data) => {
    console.log(data)
  }).catch((error) => {
    console.log(error)
  })