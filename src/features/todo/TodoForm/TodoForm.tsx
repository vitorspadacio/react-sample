import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../TodoState'
import { ButtonPlus, Container, InsertInput } from './TodoForm.styles'

export default () => {
  const dispatch = useDispatch()

  const [description, setDescription] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)
  const [showError, setShowError] = useState<boolean>(false)

  const validate = (value) => {
    setIsValid(value)
    setShowError(!value)
  }

  const handleDescriptionChange = (event) => {
    const { target: { value } } = event
    validate(value)
    setDescription(value)
  }

  const createTask = () => {
    if (!isValid) return
    dispatch(actions.addTask({ description }))
    setDescription('')
  }

  const handleSubmit = (event) => {
    validate(description)
    createTask()
    event.preventDefault()
  }

  const shouldShowError = () => (
    showError ? (<span>Obrigatório preencher para adicionar tarefa</span>) : '')

  return (
    <Container id='todo-form' onSubmit={handleSubmit} data-testid='todo-form'>
      <ButtonPlus type='submit'>+</ButtonPlus>
      <InsertInput
        type='text'
        onChange={handleDescriptionChange}
        title='descrição'
        value={description}
      />
      { shouldShowError()}
    </Container>
  )
}
