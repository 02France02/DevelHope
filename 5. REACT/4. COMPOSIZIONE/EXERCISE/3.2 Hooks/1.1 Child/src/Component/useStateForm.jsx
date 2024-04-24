import { useState } from "react";

export function useStateForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
    setPassword("")
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  }

  return {
    username,
    password,
    handleUsername,
    handlePassword,
    handleSubmit,
  };
}
