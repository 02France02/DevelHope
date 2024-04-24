import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="users">FETCH DATI</Link>
    </>
  );
}

export default App;

/* 
-Modifica l'hook personalizzato useGithubUser per utilizzare l'hook useSWR  per recuperare i dati di un utente Github.
-Modifica l'hook `useGithubUser` in modo che, se il nome utente è null, non venga effettuata nessuna richiesta. 
-Modifica l'hook `useGithubUser` in modo che restituisca una funzione per richiamare manualmente il recupero dei dati quando viene invocata.
-Utilizza SWRConfig per impostare un valore predefinito per la proprietà fetcher dell'hook useSWR.*/
