import { NavBarStyled } from "./NavBar.style"
import { useState } from "react"

function NavBar() {

  const [tamanho, settamanho] = useState(0)

  const aumentar = () => {
    if (tamanho > 0) {
      settamanho(0)
    } else {
      settamanho(40)
    }
  }

  return (
    <NavBarStyled >
      <h1><a href="#">Logo</a></h1>
      <input type="text" />
      <div className="hamburguer" onClick={aumentar} >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul tamanho={`${tamanho}%`} >
        <div className="close" onClick={aumentar} >X</div>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Carrinho</a></li>
        <li><a href="#">Categorias</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#">Favoritos</a></li>
        <li><a href="#">Entrar</a></li>
      </ul>
    </NavBarStyled>
  )
}

export default NavBar