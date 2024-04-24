import { useState } from "react";
import { Welcome } from "./Welcome";
export function InteractiveWelcome() {
  const [data, setData] = useState("");

  function handleInputChange(e) {
    setData(e.target.value);
    console.log(data);
  }

  return (
    <>
      <Welcome name={data}></Welcome>
      <input type="text" value={data} onChange={handleInputChange} />
    </>
  );
}
