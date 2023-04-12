import { useState } from "react";
import InputBtn from "./Inputs/InputBtn";
import CadastrarEmail from "./CadastrarEmail";

function Form(props) {
  const logName = (e) => {
    e.preventDefault();
    console.log("olaaaa " + nome + " sua senha eh " + senha);
  };

  const preventD = (e) => {
    e.preventDefault();
    console.log("btnClicado");
  };

  const segundoE = (e) => {
    e.preventDefault();
    console.log("segundo evento");
  };

  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();

  return (
    <div>
      <h3>Formulario</h3>
      <form>
        <p>
          <input type="email" onChange={(e) => setNome(e.target.value)} />{" "}
        </p>
        <p>
          <input type="password" onChange={(e) => setSenha(e.target.value)} />{" "}
        </p>
        <CadastrarEmail email={nome} senha={senha} />
      </form>
    </div>
  );
}

export default Form;
