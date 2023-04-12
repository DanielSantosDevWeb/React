import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import styles from "./App.module.css";

import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import NavBar from "./components/pages/NavBar";
import Footer from "./components/pages/Footer";

function App() {
  const urlImg = "https://via.placeholder.com/150";

  return (
    <div className={styles.body}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exect />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
