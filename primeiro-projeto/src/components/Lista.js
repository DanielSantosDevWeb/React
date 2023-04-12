import React from 'react'
import PropTypes from 'prop-types' // importando o proptypes OBRIGATORIO PARA USAR O PROPTYPES

function Lista({ marca , anoLancamento}) {
  return (
    <>
        <li> O carro da marca {marca} foi lançado em {anoLancamento} </li>
    </>
  )
}

Lista.propTypes = { // adicionando o tipo de valor que quero receber
    marca: PropTypes.string ,
    anoLancamento: PropTypes.number
}

Lista.defaultProps = { // Adicionando um valor default
    marca : 'Nao tem marca'
}

export default Lista