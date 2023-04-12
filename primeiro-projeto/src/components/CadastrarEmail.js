import React from "react";
import InputBtn from "./Inputs/InputBtn";

import { useState } from "react";

function CadastrarEmail({ email, senha }) {
  const [email1, setEmail] = useState();
  const [senha1, setSenha] = useState();

  const mostrarEmail = (e) => {
    e.preventDefault();

    setEmail(email);
    setSenha(senha);
    console.log("ola " + email1 + " " + senha1);
  };

  const limparEmail = (e) => {
    e.preventDefault();

    setEmail("");
  };

  return (
    <>
      <InputBtn name="Cadrastar Email" event={mostrarEmail} />

      {email1 && (
        <>
          <p> {email1} </p>
          <InputBtn name="Limpar email" event={limparEmail} />
        </>
      )}
    </>
  );
}

export default CadastrarEmail;
