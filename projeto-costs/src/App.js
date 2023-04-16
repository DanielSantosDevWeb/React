import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import { useState, useEffect } from "react";

import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Empresa from "./components/pages/Empresa";
import NovoProjeto from "./components/pages/NovoProjeto";
import Projetos from "./components/pages/Projetos";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  const [dataBase, setdataBase] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categoria", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((e) => e.json())
      .then((e) => setdataBase(e))
      .catch();
  }, []);

  return (
    <div className="App">
      {/* BrowserRouter eh onde ficara todo meu codigo usando o reactRouterDom */}
      <BrowserRouter>
        <NavBar />
        <Container>
          {/* todo o conteudo que sera mudado dinamicamente */}
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            {/* Minha rota que sera mudada quando for chamada */}
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/contato" element={<Contato />} />
            <Route
              path="/novoProjeto"
              element={<NovoProjeto categorias={dataBase} />}
            />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
