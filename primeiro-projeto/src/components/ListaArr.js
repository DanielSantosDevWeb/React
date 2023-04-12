import React from "react";

function ListaArr({ lista }) {
  return (
    <div>
      <h2>Minha lista </h2>

      <ul>
        {lista.length > 0 ? (
          lista.map((i) => <li>{i}</li>)
        ) : (
          <li>Nenhum item na lista</li>
        )}
      </ul>
    </div>
  );
}

export default ListaArr;
