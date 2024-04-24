import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Lavora } from "./Pages/Lavora";
import { Contatti } from "./Pages/Contatti";
import { Who } from "./Pages/Who";

function App() {
  return (
    <>
      <nav>
        <Link to="/">HOME</Link> /
        <Link to="/Lavora">CONTATTI</Link> /
        <Link to="/Contatti">LAVORA</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="who" element={<Who></Who>}></Route>
        </Route>
        <Route path="/Lavora" element={<Lavora></Lavora>}></Route>
        <Route path="/Contatti" element={<Contatti></Contatti>}></Route>
      </Routes>
    </>
  );
}

export default App;
