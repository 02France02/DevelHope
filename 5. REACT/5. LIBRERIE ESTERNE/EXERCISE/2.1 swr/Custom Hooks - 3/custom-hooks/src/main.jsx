import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Root } from "./components/Root.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
