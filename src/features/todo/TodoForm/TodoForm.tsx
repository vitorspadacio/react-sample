import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../TodoState'

export default () => {
  const dispatch = useDispatch()

  const [description, setDescription] = useState<string>('')

  const handleDescriptionChange = (event) => {
    const { target: { value } } = event
    setDescription(value)
  }

  const handleCreateTaskClick = () => dispatch(actions.addTask({ description }))

  return (
    <>
      <input
        type='text'
        onChange={handleDescriptionChange}
        title='descrição'
        value={description}
      />
      <button
        type='button'
        onClick={handleCreateTaskClick}
      >
        Criar tarefa
      </button>
    </>
  )
}
