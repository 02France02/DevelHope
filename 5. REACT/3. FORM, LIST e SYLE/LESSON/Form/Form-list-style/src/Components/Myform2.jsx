import { useEffect, useState } from "react";

export function Myform2() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    //salviamo pass e username
    // const name = e.target.username.value;
    // const pass = e.target.password.value;

    const userData = {
      username,
      password,
    };

    setUsers(...users, userData);

    setUsername("");
    setPassword("");
  }

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <h2>Username</h2>
        <label htmlFor="username"></label>
        <input
          name="username"
          type="text"
          id="username"
          onSubmit={() => setUsername((e) => e.target.username.value)}
        />
        <h2>PASSWORD</h2>
        <label htmlFor="password"></label>
        <input
          name="password"
          type="password"
          id="password"
          onSubmit={() => setPassword((e) => e.target.password.value)}
        />
        <button type="submit">Send</button>

        {/* Mettiamo una coindition, il bottone viene disabilitato se sta stringa vuota in data.username o pass */}
        <button disabled={!data.username || !data.password}>Login</button>
      </form>
    </>
  );
}
