/* 
-Crea un componente MouseClicker che contenga un pulsante con l'attributo name impostato sulla stringa "one".
-Aggiungi un gestore di eventi al pulsante che stampi la prop "name" sulla console quando viene cliccato, leggendo la proprietà event.target.name. */

import MouseClicker from "./MouseClicker";

function App() {
  return (
    <>
        <MouseClicker name="One"></MouseClicker>
    </>
  );
}

export default App;
