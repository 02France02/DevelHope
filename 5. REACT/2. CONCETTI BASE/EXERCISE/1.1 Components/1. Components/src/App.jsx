/* 
-Crea una nuova applicazione React con vite e rimuovere tutti i file all'interno del src cartella. Cartella src interna
-creare un Hello componente di funzione che rende il "Hello, World!" messaggio all'interno di un h2 etichetta.
-Scrivi un componente di funzione chiamato App che rende il Hello componente all'interno di un div etichetta.
-Crea un nuovo index.jsx file all'interno del src cartella e rendering App componente che utilizza il createRoot funzione
 e il render metodo sull'oggetto della radice creata.
-Avviare l'applicazione con il npm run dev comandare e aprire l'applicazione nel browser (la posizione predefinita è 
 http://localhost:5173). */

import Hello from "./Components/Hello";
function App() {
  return (
    <>
      <Hello></Hello>
    </>
  );
}

export default App;
