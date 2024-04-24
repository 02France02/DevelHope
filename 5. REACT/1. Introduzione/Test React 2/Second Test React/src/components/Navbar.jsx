//Importiamo il css della navbar
import "./Navbar.css";
//Importiano un Particolare link da aggiungere
import Link from "./Link";

function Navbar() {
  //Possiamo definire Var da inserire nell'html direttamente
  const x = 0;
  const img = "assets/react";
  //Possiamo creare un oggetto style combimato con js
  const liStyle = {
    background: x < 10? "yellow" : "blue",
  }
  return (
    <>
      <ul>
        {/* Usiamo Il link quì */}
        <li style={liStyle}>
          <Link>Figlio di Link</Link>
        </li>
        <li className="classe-per-JSX">
          <a href="#">Ciao</a>
        </li>
        <li className={`classe-per-JSX ${x > 2? "2Class" : ""}`}> {/* Aggiungo una condizione alle classi */}
          <a href="#">Ciao</a>
        </li>
        <li>
          <a href="#">Ciao</a>
        </li>
      </ul>
      {/* Possiamo usare qualsiasi cosa vista in JS */}
      <div style={{textAlign: "center", fontSize: "20px"}}>{x < 0 ? "Sotto 0" : "Sopra 0"}</div>
      {/* Per usare lo style, vanno usate Le Doppie Graffe, per indicare un Oggetto */}
      <img style={{ height: "100px" }} src={`${img}`} alt="" />
    </>
  );
}

export default Navbar;
