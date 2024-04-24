/* 
A partire dall'ultimo esercizio di oggetti di scena, modifica il Age componente in modo che il "Your age is " 
il messaggio viene visualizzato solo se il age prop è maggiore di 18. Altrimenti renderizza il "You are very young!" messaggio. */

import Welcome from "./Welcome";
function App() {
  const age = 20;
  return (
    <>
      <Welcome 
      name="Jhon"
      age={age}
      >
      </Welcome>
    </>
  );
}

export default App;
