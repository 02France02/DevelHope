/* 
-Aggiungi un effetto collaterale al Counter componente dallo Stato - 1 esercizio che stampa il valore 
 corrente del contatore all'interno della console.
 */

import Counter from "./Counter";

function App() {
  return (
    <>
      <Counter prop={1} />
    </>
  );
}

export default App;
