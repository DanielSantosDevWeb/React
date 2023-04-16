import React from "react";
import styles from "./ProjectForm.module.css";
import Input from "../inputsForm/Input";
import Select from "../inputsForm/Select";
import Button from "../inputsForm/Button";

import { useState } from "react";

function ProjectForm({ dataProjetos, categorias, tratarSubmit }) {
  const [projeto, setProjeto] = useState(dataProjetos || {});

  const submit = (e) => {
    e.preventDefault();
    console.log(projeto);
    tratarSubmit(projeto);
  };

  const tratarInputs = (e) => {
    setProjeto({ ...projeto, [e.target.name]: e.target.value });
    console.log(projeto);
  };

  const tratarSelect = (e) => {
    setProjeto({
      ...projeto,
      categoria: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  };

  return (
    <div>
      <form>
        <Input
          type="text"
          text="selecione o nome do projeto:"
          name="nome"
          placeholder="Nome do projeto"
          tratarOnChange={tratarInputs}
        />
        <Input
          type="number"
          text="Selecione o orçamento:"
          name="valor"
          placeholder="Orçamento do projeto"
          tratarOnChange={tratarInputs}
        />
        <Select
          categorias={categorias}
          tratarOnChange={tratarSelect}
          // value={projeto.categoria ? projeto.categoria.id : ""}
        />

        <Button type="submit" value="Criar Projeto" click={submit} />
      </form>
    </div>
  );
}

export default ProjectForm;
