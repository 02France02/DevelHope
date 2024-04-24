/********
 Esercizio 3: Simulazione di un Sistema di Login
 Crea una classe Utente che ha proprietà come username e password.
 Implementa una funzione di login che accetti username e password come parametri e restituisca un messaggio di successo o di errore.
 *******/




//dati salvati nel database
const utentiRegistrati = [                       
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password123' },
    { username: 'orness', password: 'aidn123' },
    { username: 'diur', password: '852741' },
];


//verifica dati utente
function login(username, password) {
    try {
        //verifico se la password e l'username siano giusti
        let verify = utentiRegistrati.some(pers => pers.username === username && pers.password === password)

        if(verify) {
            console.log("La password e l'username sono corretti");
        } else {
            console.log(new Error("Errore, username o password sbagliati"));
        }

    } catch (error) {
        console.error(error);
    }
}

login('user1', 'password123');
login('orness', 'aidn123');
login('diur', '852741');
