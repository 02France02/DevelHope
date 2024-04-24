/* 
-Modifica il Welcome componente in modo che riceva un secondo prop chiamato age e lo renderizza sotto il messaggio "benvenuto",
 all'interno di un p tag dopo il messaggio "Your age is ".
-Modifica il valore passato a name prop in modo che sia contenuto in a strong etichetta. */

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
