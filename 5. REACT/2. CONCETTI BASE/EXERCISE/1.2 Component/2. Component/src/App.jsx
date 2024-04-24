/* 
-Crea un nuovo Message componente che rende a p tag con il messaggio "What a beautiful day!".
-Rendering il nuovo componente all'interno del Hello componente.
 */
/* RISPOSTA ALL'ES 3: -SI, posso renderizzare Hello più di una volta ed posso cambiare il suo contenuto con le Props ed il CILDREN.
                      -Si, posso renderizzare message direttamente in APP dopo averlo esportato, esso si vedra a schermo*/
import Hello from "./Hello";


function App() {
  return (
    <>
      <Hello></Hello>
    </>
  );
}

export default App;
