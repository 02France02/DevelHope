//Dati ricevuti da Front-End
let date = {
  quizType: "",
  answers: [],
  mailReceived: true,
};

let form = document.querySelector("form");
let allInput = document.querySelectorAll("input");
const button = document.querySelector("#submit-data");
const main = document.querySelector("main");
const selectQuiz = document.querySelector(".select-quiz");

//Ciclo sugli input
allInput.forEach((answere) => {
  //per ogni input, al click, il bottone aggiunge una classe e si attiva
  answere.addEventListener("click", () => {
    button.classList.add("changeColor");
    button.removeAttribute("disabled");
  });
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  allInput.forEach((element) => {
    if (element.checked) {
      date.quizType = element.value;
    }
  });
  console.log(date.quizType);

  if (date.quizType === "1") {
    const containerAllQuiz = document.createElement("div");
    containerAllQuiz.setAttribute("class", "quizOne setQuizOne");

    main.appendChild(containerAllQuiz);

    containerAllQuiz.innerHTML = `

    <h2>START!</h2>

    <form>
      <div class="quiz1">
        <h3>Math: 3 - 1?</h3>

        <label for="two">
          <input type="radio" name="quiz1" id="two" value="two" />
          <span>2</span>
        </label>

        <label for="five">
          <input type="radio" name="quiz1" id="five" value="five" />
          <span>5</span>
        </label>

        <label for="six">
          <input type="radio" name="quiz1" id="six" value="six" />
          <span>6</span>
        </label>
      </div>

      <button id="submit-data" type="submit" disabled>Submit</button>
    </form>
    
    `;
    const quizOne = document.querySelector(".quizOne");
    const setQuizOne = document.querySelector(".setQuizOne");
    selectQuiz.style.transform = "translateX(-100%)";
    selectQuiz.style.opacity = "0";
  } else {
    
    const containerAllQuiz2 = document.createElement("div");
    containerAllQuiz2.setAttribute("class", "quizTwo setQuizTwo");

    main.appendChild(containerAllQuiz2);

    containerAllQuiz2.innerHTML = `

    <h2>START!</h2>

    <form>
      <div class="quiz2">
        <h3>La Creatina Fa Perdere I Capelli?</h3>

        <label for="no">
          <input type="radio" name="quiz2" id="no" value="no" />
          <span>NO</span>
        </label>

        <label for="no-right">
          <input type="radio" name="quiz2" id="no-right" value="yes" />
          <span>NOOOOOOOOO</span>
        </label>

        <label for="six">
          <input type="radio" name="quiz2" id="six" value="no" />
          <span>Ronnie Coleman Non aveva i capelli, quindi SI!</span>
        </label>
      </div>

      <button id="submit-data" type="submit" disabled>Submit</button>
    </form>
    
    `;
    const quizTwo = document.querySelector(".quizTwo");
    const setQuizTwo = document.querySelector(".setQuizTwo");
    selectQuiz.style.transform = "translateX(-100%)";
    selectQuiz.style.opacity = "0";
  }

});



//Dati recuperati dal database
let quiz1 = ["2", "6", "9"];
let quiz2 = ["Napoleone", "Cesare", "Camillo Benso", "Badoglio", "Mussolini"];
let score = 0;

//TODO: Capire quale quiz ha scelto l'utente;
//TODO: Calcolare il punteggio delle risposte;
// if (date.quizType === 1) {
//   //Utente ha selezionato Quiz Animali.
//   checkScore(quiz1);
// } else if (date.quizType === 2) {
//   //Utente ha selezionato Quiz Storico.
//   checkScore(quiz2);
// } else {
//   //Richiamo la funzione di gestione degli errori se tutte le condizioni non si verificano.
//   checkError();
// }

// function checkScore(arr) {
//   date.answers.forEach((answer) => {
//     //TODO: Verificare le risposte;
//     if (answer === arr[date.answers.indexOf(answer)]) {
//       score++;
//     }
//   });

//   //TODO: Mostra punteggio ottenuto;
//   console.log(`Il tuo punteggio è ${score}`);
// }

// //Gestione e cattura degli errori.
// function checkError() {
//   try {
//     if (
//       date.quizType > 2 ||
//       typeof date.quizType === "string" ||
//       typeof date.quizType === "boolean"
//     ) {
//       throw new Error("Quiz inexistent");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// //TODO: Verificare la risposta del pop-up.
// setTimeout(() => {
//   if (date.mailReceived === true) {
//     console.log("Hai accettato le nostre newsletter!");
//   } else {
//     console.log("Newsletter rifiutate.");
//   }
// }, 2000);
