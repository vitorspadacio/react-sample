import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actions } from '../HomeState'
import { selectNumber } from '../HomeSelectors'

export default () => {
  const dispatch = useDispatch()
  const [texto] = useState('Texto em variável do estado')
  const number = useSelector(selectNumber)

  const increment = () => dispatch(actions.increment())

  const decrement = () => dispatch(actions.decrement())

  return (
    <>
      <h1>Hello World!</h1>
      <h2>{texto}</h2>
      <h3>{number}</h3>
      <button type='button' onClick={() => increment()}>Incrementar</button>
      <button type='button' onClick={() => decrement()}>Decrementar</button>
    </>
  )
}
