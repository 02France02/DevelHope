import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";

const fetcher = url => fetch(url).then(response => response.json())

ReactDOM.createRoot(document.getElementById("root")).render(
  <SWRConfig value={{ fetcher }}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </SWRConfig>
);
