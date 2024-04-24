import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

/* REACTDOM: inietta tutti i componenti nell'HTML */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
