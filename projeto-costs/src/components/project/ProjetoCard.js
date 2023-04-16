import React from "react";
import { useState, useEffect } from "react";
import styles from "./ProjetoCard.module.css";

function ProjetoCard() {
  const [Projetos, setProjetos] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/projetos", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((obj) => obj.json())
      .then((projetos) => {
        setProjetos(projetos);
        console.log(Projetos);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.cards}>
      {Projetos &&
        Projetos.map((i) => (
          <div key={i.id} className={styles.card}>
            <h4>{i.nome}</h4>

            <p>
              <span>Valor:</span> {i.valor} Reais
            </p>
            <p>
              <span>Categoria:</span> {i.categoria.name}
            </p>
            <div className={styles.modificar}>
              <div>Editar</div>
              <div>Remover</div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProjetoCard;
