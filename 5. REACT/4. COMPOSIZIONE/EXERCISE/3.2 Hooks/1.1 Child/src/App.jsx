import { ControlledForm } from "./Component/ControlledForm";
import "./App.css";
import React from "react";

function App() {

  return (
    <>

    <ControlledForm></ControlledForm>
    </>
  );
}

export default App;

/* 
-Crea un hook personalizzato che tiene traccia dello stato di un form controllato con gli input dell'username e della 
 password, e restituisce il valore attuale degli input oltre a un gestore di eventi per aggiornare uno qualsiasi degli input.
*/
