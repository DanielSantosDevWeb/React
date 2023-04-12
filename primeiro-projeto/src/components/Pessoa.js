import React from 'react'
import style from './Pessoa.module.css'

function Pessoa({ nome, idade, cidade }) {
  return (
    <div className={style.body}>
        <p className={style.pessoa}>ola {nome }, Bom dia </p>
        <p className={style.paragrafo}>Voce tem {idade } anos </p>
        <p className={style.paragrafo}>Mora em {cidade }</p>
    </div>
  )
}

export default Pessoa