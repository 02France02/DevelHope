import { useState } from "react";
import "./CardForm.css";

export function CardForm({addCity}) {
  const [formData, setFormData] = useState({
    name: "",
    descrizione: "",
    img: "",
    isVisited: false,
  });

  function handleInpuntChange(e) {
    const { name, type, value, checked } = e.target;
    const inputvalue = type == "checkbox" ? checked : value;
    setFormData({
        ...formData,
        //A seconda Di cosa è NAME,  sarà uguale al valore
        [name]: inputvalue
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const city = {
        id: Math.random(),
        img: formData.img,
        title: formData.name,
        description: formData.descrizione,
        isVisited: formData.isVisited
    }
    addCity(city)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="cardForm">
        <div>
          <label htmlFor="img">Image città</label>
          <input
            type="text"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleInpuntChange}
          />
        </div>

        <div>
          <label htmlFor="descrizione">Descrizione città</label>
          <input
            type="text"
            id="descrizione"
            name="descrizione"
            value={formData.descrizione}
            onChange={handleInpuntChange}
          />
        </div>

        <div>
          <label htmlFor="name">Nome città</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInpuntChange}
          />
        </div>

        <div>
          <label htmlFor="isVisited">Visitata</label>
          <input
            type="checkbox"
            id="isVisited"
            name="isVisited"
            checked={formData.isVisited}
            onChange={handleInpuntChange}
          />
        </div>

        <button>Add Card</button>
      </form>
    </>
  );
}
