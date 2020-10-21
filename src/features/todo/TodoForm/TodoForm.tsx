import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './TodoForm.scss'
import { actions } from '../TodoState'

export default () => {
  const dispatch = useDispatch()

  const [description, setDescription] = useState<string>('')

  const handleDescriptionChange = (event) => {
    const { target: { value } } = event
    setDescription(value)
  }

  const handleCreateTaskClick = () => {
    dispatch(actions.addTask({ description }))
    setDescription('')
  }

  const handleEnterPress = (event) => {
    if (event.key !== 'Enter') return
    handleCreateTaskClick()
  }

  return (
    <section id='todo-form'>
      <button className='plus' type='button' onClick={handleCreateTaskClick}>+</button>
      <input
        type='text'
        onChange={handleDescriptionChange}
        onKeyPress={handleEnterPress}
        title='descrição'
        value={description}
      />
    </section>
  )
}
