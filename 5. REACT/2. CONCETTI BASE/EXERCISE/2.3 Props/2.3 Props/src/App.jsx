/* 
-Estrarre il "Your age is " messaggio in un nuovo componente chiamato Age e rendilo all'interno del Welcome componente.
-Passa al Age componente il age prop che Welcome sta ricevendo dal App componente. */

import Welcome from "./Welcome";
function App() {
  const age = 20;
  return (
    <>
      <Welcome 
      name="Francesco"
      age={age}
      >
      </Welcome>
    </>
  );
}

export default App;
