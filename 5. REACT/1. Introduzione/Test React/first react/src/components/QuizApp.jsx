import "./QuizApp.css";

import { useState } from "react";

export function QuizApp({ nameClass, answere1, answere2 }) {
  // Stato per memorizzare le risposte selezionate
  const [answers, setAnswers] = useState([]);
  let userAnsw = []
  let correctAnsw = ["Math-Quiz", "Animal-Quiz"]
  // Funzione per gestire l'invio del form
  function handleSubmit(e) {
    e.preventDefault();
    const elem = [...e.target];
    elem.forEach((elem) => {
      if (elem.checked) {
        setAnswers([elem.value]);
        userAnsw.push(elem.value)
        console.log(userAnsw);
      }
    });
    console.log("risposte", answers, userAnsw);

    if (userAnsw.length > 0) {
      userAnsw.forEach(elem => {
        if (elem === correctAnsw[0] && elem === correctAnsw[1]) {
          alert("correct")
        }
      })
    }
  }

  return (
    <>
      <div className="quiz-app">
        {/* Form per selezionare la risposta */}
        <form onSubmit={handleSubmit}>
          <div className={nameClass}>
            <h3>Select Your Favorite!</h3>

            {/* Checkbox per selezionare il quiz di matematica */}
            <label htmlFor={answere1}>
              <input type="radio" name="quiz" id={answere1} value={answere1} />
              <span>{answere1}</span>
            </label>

            {/* Checkbox per selezionare il quiz di bodybuilding */}
            <label htmlFor={answere2}>
              <input type="radio" name="quiz" id={answere2} value={answere2} />
              <span>{answere2}</span>
            </label>
            <button id="submit-data" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
