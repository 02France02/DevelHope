// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
// -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }.
// -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
// -Infine, chiama le funzioni per recuperare e stampare in console
//  il nome dell'utente e i titoli dei post.

const user = { id: 1, name: "John" };
const post = ["Post 1", "Post 2", "Post 3"];

function fetchUserData() {
  //promise per la stampa di user
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        user.id === 2 &&
        user.name === "John" &&
        user.name !== 0 &&
        typeof user.name === "string" &&
        typeof user.name !== "boolean" &&
        typeof user.name !== "number"
      ) {
        resolve(user); //esempio con i backTicks, il metodo JSON serve a concatenarte un oggetto ad uina stringa, user
      } else {
        reject("data not found");
      }
    }, 2000);
  });
}

function fetchUserPosts(userId, userName) {
  // promise per i post
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1 && userName === "John") {
        resolve("post restored " + post); //stampa la stringa + i post
      } else {
        reject("post not found 2");
      }
    }, 4000);
  });
}

// fetchUserData().then((data) => {
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// fetchUserPosts(user.id, user.name).then((data) => {
//   console.log(data)
// }).catch((error) => {
//   console.log(error)
// })

fetchUserData()
  .then((data) => {
    console.log(data);
    return fetchUserPosts(data.id, data.name).then((res) => console.log(res));
  })
  .catch((error) => console.error(error));



fetchUserData()
    .then((data) => {
      console.log(data);
        return fetchUserPosts(data.id, data.name)
    })
    .then((res) => console.log(res))

    .catch((error) => console.error(error));
)  
  

