import { useState } from "react";

export function ControlledMessageFotm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [userMessages, setUserMessages] = useState([]);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();
    const userMessage = {
      name,
      message,
    };

    setUserMessages(() => [...prev, userMessage]);

    setName("");
    setMessage("");
  }
  return (
    <>
      <h2>Send Form</h2>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">Instert your name</label>
        <label htmlFor="message" id="name" onChange={handleName} value={name}>
          Contact Us
        </label>
        <input type="text" id="message" onChange={handleMessage} value={message} />
        <button type="submit">Send</button>
      </form>

      {userMessages.length > 0 ? userMessages.map((user, index) => {
        <div key={index}>
            <h3>Users</h3>
            <p>{user.name}</p>
            <p>{user.password}</p>

        </div>
      }) : "Inserisci i dati"}
    </>
  );
}
