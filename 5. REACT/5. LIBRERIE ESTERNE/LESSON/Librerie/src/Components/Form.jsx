import { useEffect, useState } from "react";

export function Form() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    //reset
    setData({ username: "", password: "" });
    //reset
    e.target.username.value = "";
    e.target.password.value = "";
  }

  function handleChangeData(e) {
    const name = e.target.name;
    console.log(name);

    if (e.target.value.length > 3) {
      setData((dataPrev) => ({ ...dataPrev, [name]: e.target.value }));
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChangeData}
          />

          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={handleChangeData}
          />

          <button disabled={!data.username || !data.password}>Login</button>
        </form>
      </div>
    </>
  );
}
