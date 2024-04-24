import { useEffect, useState } from "react";
import "./Counter.css"


function Counter({prop}) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter])

  return (
    <>
      <div className="container">
        <h2>{counter}</h2>
        <button
          type="button"
          onClick={() => setCounter(counter + prop)}
        >
          COUNT
        </button>
      </div>
    </>
  );
}
export default Counter;
