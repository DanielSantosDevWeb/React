
import { useState } from "react"
import NavBar from "./components/layouts/NavBar";
import { Body } from "./components/layouts/Body";
import Section from "./components/components/Section";


function App() {

  const [mostrar, setmostrar] = useState(false)

  const ok = () => setmostrar(!mostrar);

  return (
    <>
      <NavBar></NavBar>
      <Body>
        <Section />
      </Body>

      <footer>
        <h1>footer</h1>
      </footer>

    </>
  )
}

export default App
