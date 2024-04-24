//Dati ricevuti da Front-End
let date = {
  quizType: 1,
  answers: [],
  mailReceived: true,
};

let form = document.querySelector("form");
let allInput = document.querySelectorAll("input");
const button = document.querySelector("#submit-data");
const container = document.querySelector(".container");
const second = document.querySelector(".second");
//Ciclo sugli input
allInput.forEach((answere) => {
  //per ogni input, al click, il bottone aggiunge una classe e si attiva
  answere.addEventListener("click", () => {
    button.classList.add("changeColor");
    button.removeAttribute("disabled");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  allInput.forEach((element) => {
    if (element.checked) {
      date.answers.push(element.value);
    }
  });
  console.log(date.answers);
  //

  if (date.answers.length >= 4) {
    alert("verifica");
    container.style.transform = "translateX(-100%)";
    container.style.opacity = "0";

    second.style.transform = "translateX(0)";
    second.style.opacity = "1";
    second.style.display = "block";
  } else {
    alert("cpmpletare tutto");
  }
});

//Dati recuperati dal database
let quiz1 = ["2", "6", "9"];
let quiz2 = ["Napoleone", "Cesare", "Camillo Benso", "Badoglio", "Mussolini"];
let score = 0;

//TODO: Capire quale quiz ha scelto l'utente;
//TODO: Calcolare il punteggio delle risposte;
if (date.quizType === 1) {
  //Utente ha selezionato Quiz Animali.
  checkScore(quiz1);
} else if (date.quizType === 2) {
  //Utente ha selezionato Quiz Storico.
  checkScore(quiz2);
} else {
  //Richiamo la funzione di gestione degli errori se tutte le condizioni non si verificano.
  checkError();
}

function checkScore(arr) {
  date.answers.forEach((answer) => {
    //TODO: Verificare le risposte;
    if (answer === arr[date.answers.indexOf(answer)]) {
      score++;
    }
  });

  //TODO: Mostra punteggio ottenuto;
  console.log(`Il tuo punteggio è ${score}`);
}

//Gestione e cattura degli errori.
function checkError() {
  try {
    if (
      date.quizType > 2 ||
      typeof date.quizType === "string" ||
      typeof date.quizType === "boolean"
    ) {
      throw new Error("Quiz inexistent");
    }
  } catch (error) {
    console.error(error);
  }
}

//TODO: Verificare la risposta del pop-up.
setTimeout(() => {
  if (date.mailReceived === true) {
    console.log("Hai accettato le nostre newsletter!");
  } else {
    console.log("Newsletter rifiutate.");
  }
}, 2000);
