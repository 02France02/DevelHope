import { useState, useEffect } from "react";

export function Effect() {
  const [count, setCount] = useState(0);

  {
    /* -USE-EFFECT, gestisce gli effetti collaterali, sono qualsiasi cosa che non è in React.
      -Simula anche Un Ciclo di Vita di un componente  */
  }


  return (
    <>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </>
  );
}
