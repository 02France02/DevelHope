import "./App.css";
import { Form } from "./Components/Form";
import { Welcome } from "./Components/Welcome";
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Catalog } from "./Components/Catalog";
import { Container } from "./Components/Container";
import { Product } from "./Components/Product";
function App() {
  return (
    <Container
      title={
        <div>
          <h1>My app</h1>
          <div>
            <Link to="/">Home</Link> / <Link to="products">PRODUCTS</Link>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="*" element={<div><p>Not found</p></div>} /> 
        <Route path="/" element={<Welcome />} />
        <Route path="products" element={<Catalog />} />
          <Route path="/:id" element={<Product />}></Route>
          <Route index element={<p>Select a product</p>} ></Route>
        <Route />
        <Route path="login" element={<Form />} />
        {/* Ogni volta che il percorso corrisponde a /login, renderizza l'elemento Form */}
      </Routes>

      <h2>
        <Link to="/">HOME</Link> / <Link to="/login">FORM</Link>
      </h2>
    </Container>
  );
}

export default App;

/* 
REACT ROUTER
E' una libreria di terze parti per la gestione del routing all'interno delle applicazioni React. 
-React non gestisce nativamente il routing, quindi è  necessario  React Router  o l' interazione 
 diretta con l'API della cronologia del browser.
#ROUTING# = determina quale componente React deve essere renderizzato in base all'URL corrente dell'applicazione. 

-1 Installare con npm nella cartella voluta  npm install react-router-dom
-2 Nuovo componente Root.jsx
-3 Scrivere come tag nel root <BrowserRouter><BrowserRouter/>
-4 Importarsi <App/> debtro <BrowserRouter>
-5 Importarsi in App il tag <Routes/>
-6 Importarsi in Routes il tag <Route path="/" element={<Component/>}/>

CAMBIO PERCORSO SENZA CARICAMENTO PG
-<Link to="/login"/>

NAVIGAZIONE IMPERATIVA
-E' un HOOK useNavigate(),  da importare dalla libreria
-Consente ai componenti di eseguire la navigazione programmata in risposta a eventi o logica dell'applicazione.

ACCESSO AL COMPONENTE da URL
-Con useParams(), esso restituisce un oggetto
-Accede ai parametri presenti nell'URL della pagina corrente.
-Possiamo usare i nomi nell'url per inserirli nei components

ROUTING ANNIDATO:
-<Outlet />,  indica dove i componenti figlio delle route dovrebbero essere resi all'interno della gerarchia dei componenti.*/
