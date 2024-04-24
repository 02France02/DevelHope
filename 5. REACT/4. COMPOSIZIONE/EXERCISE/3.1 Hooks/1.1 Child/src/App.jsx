
import "./App.css";
import React from "react";
import { useCounter } from "./Component/useCounter";

function App() {
 const {count, counterPlus, counterLoss, counterReset} = useCounter()

  return (
    <>
    <p>{count}</p>
      <button onClick={counterPlus}>+</button>
      <button onClick={counterLoss}>-</button>
      <button onClick={counterReset}>Reset</button>

    </>
  );
}

export default App;

/* 
-Crea un hook personalizzato chiamato useCounter che tiene traccia dello stato di un contatore e restituisce il valore 
 attuale del contatore oltre a tre funzioni per incrementare, decrementare e reimpostare il contatore.
*/
