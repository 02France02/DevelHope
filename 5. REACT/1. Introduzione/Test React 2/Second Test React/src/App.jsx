/* import Title from "./components/Title" */
import { Title } from "./components/Title";

//Importiamo la Navbar Nell'App
import Navbar from "./components/Navbar";

import { Card } from "./components/Card";

import "./App.css";

//importiamo lo STATE
import { useState } from "react";

import { Effect } from "./components/Effect";

import { CardForm } from "./components/CardForm";
//USIAMO I CICLI
//Tramite PROPS Cambieremo le Card
function App() {
  //ORA, Creiamo lo stato con la VAR Count
  //Var di riferimento, + una funzione per settarlo, ed un parametro di Partenza a cui possiamo dare qualsiasi cosa.
  //AL CLICK,  il valore viene sovrascritto
  const [count, setCount] = useState(0);

  //possiamo avere altre variabili, Uso di un UTENTE
  const [user, setUser] = useState({ name: "Francesco", age: 30 });

  //con array
  const [items, setItems] = useState([1, 2, 3]);

  //Func che aggiunge un nuovo item allo stato, con lo SPREAD OPERATOR
  const addItem = () => {
    const newItem = 4;
    //prendi gli elem di ITEMS, aggiungi un nuovo item
    setItems([...items, newItem]);
    console.log(items);
  };

  const addUser = () => {
    const newName = "Alessio";
    //Aggiorniamo il NOME
    setUser({ ...user, name: newName });
    console.log(user);
  };

  //la pag parte con 4 città
  const [cities, setCities] = useState([
    {
      id: 1,
      imageUrl:
        "https://lh5.googleusercontent.com/proxy/0diPJjN9qaBKIKjeTUrLa0xZe_U54nyoPCCgX06VT_jXy4aA2Dpxw4uBxvDXdAxQl5cR_rY3ehxQXpggIiusgS-IgDnR6KxuspMjsNH1ybaz7ioWvtwZZH_4OCZ8oQpeaGf5_VRMyR8pbeDTAev1qIePUCD6Vw=w810-h468-n-k-no",
      name: "Roma",
      description:
        "Roma è la capitale d'Italia e offre una ricca storia e cultura.",
      isVisited: true,
    },
    {
      id: 2,
      imageUrl:
        "https://www.dgvtravel.com/uploads/fe/44/canada-cosa-vedere.jpg?x=1635265574204",
      name: "Parigi",
      description:
        "Parigi è conosciuta come la città dell'amore e ha una bellezza unica.",
      isVisited: false,
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.studenti.stbm.it/images/2023/08/03/new-york-storia-monumenti-e-protagonisti-orig.jpeg",
      name: "New York",
      description:
        "New York è una metropoli globale con una vasta gamma di attrazioni.",
      isVisited: true,
    },
  ]);
  function addCity() {
    setCities([...cities, name]);
  }
  function handleChange(e) {
    console.log("ciao");
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <Navbar></Navbar>
      <CardForm addCity={addCity}></CardForm>
      <Title />
      <main className="flex">
        {/* CICLIAMO l'OBJ, va usata la Parentesi tonda. Usare UN PROP KEY, non verranno mostrate, devono essere univoche  */}
        {cities.map((city) => (
          <Card
            key={city.id}
            isVisited={city.isVisited}
            image={city.imageUrl}
            title={city.name}
          >
            {city.description}
          </Card>
        ))}
        {/* CONCATENIAMO FILTER E MAP, per avere le città filtrate */}
        {/* {cities
          .filter((city) => city.isVisited)
          .map((city) => (
            <Card
              key={city.id}
              isVisited={city.isVisited}
              image={city.imageUrl}
              title={city.name}
            >
              {city.description}
            </Card>
          ))} */}
      </main>
      {/* GESTIONE DEGLI EVENTI */}
      {/* L'azione va messa sottoforma di funzione anonima o chiamato tramite Normal Function */}
      <button onClick={() => alert("ciao")}>alert</button>

      {/* Ad ogni lettera scritta,  fa un LOG di CIAO + Prende il Value con Target */}
      <input type="text" onChange={handleChange} />

      {/* PREVENTDEFAULT al Form*, l'eveno va al form*/}
      <form onSubmit={handleSubmit}>
        <button type="submit">Invia</button>
      </form>

      {/* LO STATE, sono Hook()*/}
      {/* Possiamo fare qualsiasi cosa, come un COUNT. Lo STATE sono dati interni all'app, le scelte possibili da fare */}
      {/* Non possiamo usare La logica di JS "count++",react aggiorna il componente solo quando sta un cambiaamento doi stato */}
      {/* Posso passare COUNT anche tramite PROP alla Card */}
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <button onClick={addItem}>add</button>
      <button onClick={addUser}>addUser</button>
      <Effect></Effect>
    </div>
  );
}

export default App;

// //Tramite PROPS Cambieremo le Card
// function App() {

//   return (
//     <div>
//       <Navbar></Navbar>
//       <Title />
//       <main className="flex">
//         <Card
//           isVisited = {true}
//           image="https://lh5.googleusercontent.com/proxy/0diPJjN9qaBKIKjeTUrLa0xZe_U54nyoPCCgX06VT_jXy4aA2Dpxw4uBxvDXdAxQl5cR_rY3ehxQXpggIiusgS-IgDnR6KxuspMjsNH1ybaz7ioWvtwZZH_4OCZ8oQpeaGf5_VRMyR8pbeDTAev1qIePUCD6Vw=w810-h468-n-k-no"
//           title="Tokyo"
//         >
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
//           incidunt.
//         </Card>
//         <Card
//           isVisited = {false}
//           image="https://cdn.studenti.stbm.it/images/2023/08/03/new-york-storia-monumenti-e-protagonisti-orig.jpeg"
//           title="New York"
//         >
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
//           incidunt
//         </Card>
//         <Card
//           isVisited = {true}
//           image="https://www.dgvtravel.com/uploads/fe/44/canada-cosa-vedere.jpg?x=1635265574204"
//           title="Canada"
//         >
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
//           incidunt
//         </Card>
//       </main>
//     </div>
//   );
// }

// export default App;
