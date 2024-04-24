import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Clock } from "./Components/Clock";
/* 
-Install the sass package and use SCSS to style your Clock component.
-TERMINAL: npm install node-sass --save
*/
function App() {

  return (
    <>
      <Clock></Clock>
    </>
  );
}

export default App;
