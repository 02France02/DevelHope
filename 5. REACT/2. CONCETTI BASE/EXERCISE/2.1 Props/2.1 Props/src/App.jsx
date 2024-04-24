/* 
-Creare un "Welcome componente" che riceve un name prop e renderizza il Welcome, {name}! messaggio all'interno di un p etichetta.
-Rendi questo componente per te App componente, passandolo a name prop di tua scelta.
-Cosa succede se non viene passata alcuna prop di nome al componente Welcome? Puoi impostare un valore predefinito per la prop di nome? 
 Si, posso impostare un nome di Default ad Welcome*/

import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Welcome name="Francesco"></Welcome>
    </>
  );
}

export default App;
