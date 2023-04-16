import React from "react";
import styles from "./NovoProjeto.module.css";
import ProjectForm from "../project/ProjectForm";
import { useNavigate } from "react-router-dom";

function NovoProjeto({ categorias }) {
  const navigate = useNavigate(); //usado para redirecionar para outra rota

  function postProjeto(projeto) {
    // funcao que add o projeto a api

    projeto.cost = 0;
    projeto.services = [];

    fetch("http://localhost:5000/projetos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(projeto), //mandando meu obj em formato de Json
    })
      .then((e) => e.json())
      .then((projeto) => {
        console.log(projeto);

        //redirect

        navigate("/projetos", {
          state: { menssagem: "Projeto Criado", estado: "sucesso" },
        }); // mandando algumas infos pelo 'useLocation' na chave state
      })
      .catch((err) => {
        navigate("/projetos", {
          state: { menssagem: "Projeto Nao Criado", estado: "erro" },
        }); // se der erro manda outras infos pelo 'useLocation'
      });
  }

  return (
    <div className={styles.novoProjeto}>
      <h1>Criar Projeto</h1>
      <p>Crie e presonalize seu projeto para adicionar ao serviço </p>
      <ProjectForm tratarSubmit={postProjeto} categorias={categorias} />
    </div>
  );
}

export default NovoProjeto;
