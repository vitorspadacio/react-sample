import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../../components/Styled/Input'
import { actions } from '../TodoState'
import { ButtonPlus, Container } from './TodoForm.styles'

export default function () {
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
    event.preventDefault()
    validate(description)
    createTask()
  }

  const shouldShowError = () => (
    showError ? (<span>Obrigatório preencher para adicionar tarefa</span>) : '')

  return (
    <Container id='todo-form' onSubmit={handleSubmit} data-testid='todo-form'>
      <ButtonPlus type='submit'>+</ButtonPlus>
      <Input
        type='text'
        onChange={handleDescriptionChange}
        title='descrição'
        value={description}
      />
      { shouldShowError()}
    </Container>
  )
}
