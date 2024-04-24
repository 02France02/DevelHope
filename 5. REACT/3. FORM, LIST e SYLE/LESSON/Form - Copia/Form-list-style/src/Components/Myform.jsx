import { useState } from "react";

export function Myform() {
  //Creiamo una cola var state con 2 oggetti dentro
  const [data, setUsername] = useState({
    username: "",
    password: "",
    session: false,
  });

  //prendo cio che viene digitato nell'input
  function handlerInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    const checked = e.target.checked;
    const type = e.target.type;

    setUsername((d) => {
      //Possiamo farlo anche con lo Spread Operator
      const update = { ...d };
      update[name] = type === "checkbox" ? checked : value;
  
      return update;
      //cambio di valore del nome per aggiornarlo
      //d[name] = value;

      //Posso farlo direttamente nell'oggetto
      /* return {
            ...d,
            [name]: type === "checkbox" ? checked : value
         } */
    });
  }

  //reset form
  function handlerResetForm() {
    setUsername({
      username: "",
      password: "",
      session: false,
    });
  }

  //Password

  return (
    <>
      <h1>My Form</h1>
      <input
        name="username"
        type="text"
        value={data.username}
        onChange={handlerInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handlerInputChange}
      />
      <button type="reset" onClick={handlerResetForm}>
        reset
      </button>
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handlerInputChange}
      />
      {/* Mettiamo una coindition, il bottone viene disabilitato se sta stringa vuota in data.username o pass */}
      <button disabled={!data.username || !data.password}>Login</button>
      {/* Stampa a schermo l'oggetto cambiato dagli input */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
