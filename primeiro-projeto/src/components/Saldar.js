import React from "react";

function Saldar({ nome }) {
  const seuNome = (nome) => {
    return nome;
  };

  return (
    <div>
      <p> {nome && <p> Ola {nome}, Seja bem vindo </p>} </p>
    </div>
  );
}

export default Saldar;
