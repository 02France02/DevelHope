const users = [
  {
    username: "user1",
    password: "password1",
  },
  {
    username: "user2",
    password: "password2",
  },
  {
    username: "user3",
    password: "password3",
  },
];
//da accesso agli elementi interni
const form = document.querySelector("form");
const buttonRegister = document.querySelector("#register");
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");

//Dato che abbiamo il form,  diamo un evento a lui per i figli
//"e", da accesso agli eventi del form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //prendiamo i valori all'input
  const username = e.target.username.value;
  const password = e.target.password.value;
  let isRegistered = false;

  const userData = {
    username,
    password,
  };
  //verifichiamo se è presente nell'array creato con un ciclo o Find o con una Var che diventa True se trova il valore
  users.forEach((user) => {
    if (
      user.username === userData.username &&
      user.password === userData.password
    ) {
      isRegistered = true;
    }
  });

  if (isRegistered) {
    alert("Utente autenticato");
  } else {
    alert("Perfavore registrati");
  }

  /*   //ora Find:
    const findUser = users.find((element) => element.username === userData.username && element.password === userData.password);
  
    if (findUser) {
      alert("Registrati");
    } else {
      alert("Utente autenticato");
    }
    console.log(findUser);
   */
});

//per non far ripetere la stessa azione del login
buttonRegister.addEventListener("click", (e) => {
  e.preventDefault();
  //controlla se gli input son pieni
  if (inputUsername.value && inputPassword.value) {
    const newUser = {
      username: inputUsername.value,
      password: inputPassword.value,
    };
    //controlla gli username
    const findUsers = users.find(
      (element) => element.username === newUser.username
    );

    //se mi ritorna l'utente inserito, appaiono gli alert
    if (findUsers) {
      alert("Gia registrato");
      return;
    } else {
      //inseriamo il nuovo utente in quelli presenti
      users.push(newUser);
      alert("Registrato con successo");
      console.log(users);
    }
  }
});
