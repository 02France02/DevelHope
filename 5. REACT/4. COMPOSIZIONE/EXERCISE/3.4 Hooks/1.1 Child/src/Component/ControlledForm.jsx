import { useRef } from "react";
import { useStateForm } from "./useStateForm";

export function ControlledForm() {
  const refUsern = useRef(null);
  const refPass = useRef(null);

  const { username, password, handleUsername, handlePassword, handleSubmit } = useStateForm();

  function reset() {
    refUsern.current.value = "";
    refPass.current.value = "";
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
          ref={refUsern}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
          ref={refPass}
        />
        <button onClick={reset}>invia</button>
      </form>
    </>
  );
}
