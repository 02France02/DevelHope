import { Routes, Route, Link } from "react-router-dom";
import GitHubUsers from "./Components/GitHubUsers";
import "./App.css";
import { GithubUser } from "./Components/Githubuser";

function App() {
  return (
    <>
      <nav>
        <h2>My Home</h2>
        <Link to="/users">GITHUB</Link>
      </nav>
      <Routes>
        <Route path="users" element={<GitHubUsers></GitHubUsers>}>
        <Route path=":username" element={<GithubUser />} /> {/* Aggiunta la route per il componente GithubUser */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

/* 
         #SWR#
-E' un modo per recuperare dati da un server Remoto
-E' una strategia per restituire prima i dati dalla cache, quindi inviare la richiesta di recupero e infine fornire i dati aggiornati.
-PRIMA si faceva in maniera MANUALE, con UseEffect e UseState, ma Essa non teneva conto che la stessa richiesta poteva esser effettuata
 più di una voilta da altri componenti
-CON SWR la richiesta è univoca per tutto il progetto e può esser memorizzata anche nella CACHE

        #INSTALL SWR#
-1. npm install swr
-2. import useSWR from "swr" nel componente desiderato
-3. Chiamarla come custom hook nel componente destrutturandola con DATA e ERROR e darle un link API
-4  Creare fuori una function fetcher "const fetcher = url => fetch(url).then(resp => resp)"
-5. importare come secondo parametro di useSWR la funzione creata
-6. nel return mettere 3 condizioni: 
      {!data && !error && <h3>loading...</h3>}
      {error && <h3>Error Fetch...</h3>}
      {data && !error && CODICE...}
-7. Add a new route in APP component e collega a USERS il componente creato

      #MUTATE FUNCTION# 
-Essa può essere chiamata in qualsiasi momento in qualsiasi momento,  per attivare un nuovo recupero 
 "const { data, error, MUTATE} = useSWR(`https://api.github.com/users`, fetcher);"
 
      ##*/
