// Nel nostro file di partenza, troviamo un oggetto `user` che presenta le proprietà `name` e `age`.
//  Adesso, se vogliamo creare un nuovo utente partendo da `user`, e dopo proviamo a modificarne il nome, 
//  come vedrete dai console.log(), andremo a modificare anche l'oggetto di partenza.
// Sapresti modificare il `name` di `newUser`, senza cambiare quello di `user`?




let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {};                 //creo un nuovo oggetto

for (let key in user) {           //uso il ciclo FOR per assegnare a 
  newUser[key] = user[key];
  
}

newUser.name = "paolo";

console.log(newUser)
console.log(user)



