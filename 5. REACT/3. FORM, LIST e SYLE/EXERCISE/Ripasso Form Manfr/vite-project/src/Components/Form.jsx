import { useState } from "react";

// export function Form() {
//   // Definisci lo stato iniziale per i dati del form
//   const [data, setData] = useState({
//     username: "",
//     password: "",
//   });

//   // Gestisci l'invio del form
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(data); // Stampa i dati del form
//     // Resettare i dati del form
//     setData({ username: "", password: "" });
//     // Resettare i valori dei campi del form
//     e.target.username.value = "";
//     e.target.password.value = "";
//   }

//   // Gestisci il cambiamento dei dati del form
//   function handleChangeData(e) {
//     const name = e.target.name; // Ottieni il nome del campo
//     console.log(name);

//     if (e.target.value.length > 3) { // Controlla se la lunghezza del valore è maggiore di 3
//       // Aggiorna lo stato solo se la lunghezza del valore è maggiore di 3
//       setData(() => ({ ...data, [name]: e.target.value }));
//     }
//   }

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           {/* Campo username */}
//           <label htmlFor="username">username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             onChange={handleChangeData}
//           />

//           {/* Campo password */}
//           <label htmlFor="password">password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             onChange={handleChangeData}
//           />

//           {/* Pulsante di login */}
//           <button disabled={!data.username || !data.password}>Login</button>
//         </form>
//       </div>
//     </>
//   );
// }

import React from "react";

export function Form() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    setData({ username: "", password: "" });
    e.target.username.value = "";
    e.target.password.value = "";
  }

  function handleChangeData(e) {
    const name = e.target.name;
    setData(() => ({ ...data, [name]: e.target.value }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChangeData}
        />
        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChangeData}
        />
        <button type="submit" disabled={!data.username || !data.password}>
          GO!
        </button>
      </form>
    </div>
  );
}


