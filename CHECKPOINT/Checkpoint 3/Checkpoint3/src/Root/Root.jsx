import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

function Root() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Root;
