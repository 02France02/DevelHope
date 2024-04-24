/* 
-Creare un Counter componente di funzione e creare una nuova variabile di stato chiamata counter inizializzato a 0. 
 Il Counter componente dovrebbe rendere il counter valore all'interno di un h2 tag e il counter il valore deve 
 essere incrementato ogni volta che l'utente fa clic su un pulsante.
-Suggerimento: usa il useState gancio. Rendilo così che il valore iniziale del counter e l'importo dell'incremento 
 viene passato come oggetti di scena al componente. Quando si chiama la funzione "setter" per incrementare il contatore,
 il parametro dovrebbe essere una funzione o un valore immediato? Perché?
 RISPOSTA: deve esser una funzione, per garantire che il paramentro sia aggiornato e non sovrascritto
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
