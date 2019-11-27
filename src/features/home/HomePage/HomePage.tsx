import React, { useState } from 'react'

export default () => {
  const [texto] = useState('Texto em variável do estado')

  return (
    <>
      <h1>Hello World!</h1>
      <h2>{texto}</h2>
    </>
  )
}
