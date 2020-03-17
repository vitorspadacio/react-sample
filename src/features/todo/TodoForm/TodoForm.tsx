import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from '../TodoActions'
import { State } from '../../types'

export default () => {
  const isInserting = useSelector<State, boolean>((state) => state.todo.isInserting)
  const dispatch = useDispatch()

  const [description, setDescription] = useState<string>('')

  const handleDescriptionChange = (event) => {
    const { target: { value } } = event
    setDescription(value)
  }

  const handleCreateTaskClick = () => dispatch(Actions.createTask(description))

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
        disabled={isInserting}
      >
        Criar tarefa
      </button>
    </>
  )
}
