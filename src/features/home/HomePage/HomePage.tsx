import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../HomeActions'

export default () => {
  const dispatch = useDispatch()
  const [texto] = useState('Texto em variável do estado')
  const reduxState = useSelector<any, any>((state) => state.home)

  const mudarTexto = () => dispatch(Actions.inicializar())

  return (
    <>
      <h1>Hello World!</h1>
      <h2>{texto}</h2>
      <h3>{reduxState.texto}</h3>
      <button type='button' onClick={() => mudarTexto()}>Muda texto</button>
    </>
  )
}
