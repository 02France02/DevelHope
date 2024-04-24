                                        //ASYNC E AWAIT

/*Questi 2 metodi,  servono per risolvere delle funzioni annidate, con un codice più pulito.  */
//FUNZIONE CON PROMISE, .THEN e .CATCH, essa verifica userName e Password e ne restituisce l'utente con i suoii amici

const users = [{id: 1, name: "Paolo", password: 1234, userName: "Paolino2"},
               {id: 2, name: "Gino", password: 4561, userName: "GinoBello"}
              ];

const friends = {1: [{id: 6, name: "Ale"}, {id: 5, name: "sallo"}],
                 2: [{id: 4, name: "giorgio"}, {id: 1, name: "Simo"}]  
                }
                 
                

function login(userName, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.password === password && user.userName === userName )
            if (user) {
                resolve(user)
            } else {
                reject(new Error("not valid credentials"))          //new Error() fa apparire l'errore in console in modo più elegante
            }
        }, 1000);
    })
        
};

function getFriends(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userFriends = friends[id];

            if(userFriends) {
                resolve(userFriends);
            } else {
                reject(`user with ID ${id} is loney`);
            }
        }, 2000);
    });
}


 login("Paolino2", 1234)
    .then((data) => {
        getFriends(data.id)                  //Chiamiamo la funzione con l'id del risultato di login()
            .then(dataFriends => console.log(dataFriends))     //Dobbiamo usare un altro .then per prendere il risultato di getfriends()  
})
.catch((error) => console.log(error))     






              //ADESSO USIAMO ASYNC e AWAIT sulla stessa funzione precedente



async function loginAndFetchFriends() {                 //ASYNC = va usato per rendeerla asincrona

    try {                                               // si usa il try e catch per prendere l'errore              
        const data = await login("Paolino2", 1234);     //stampa il RESOLVE di LOGIN, ovvero DATA
        const friends = await getFriends(data.id)       //prende l'ID di DATA, e lo passa come parametro. DATA sarebbe un arrey come risultato

        console.log(data, friends);
        
    } catch (error) {               //gestisce l'errore
        console.error(error);
    } 
}

loginAndFetchFriends();





