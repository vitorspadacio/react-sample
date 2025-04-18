import Input from '@components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useTodoStore } from '../TodoStore'
import { TodoForm, todoSchema } from './TodoForm.schemas'
import { ButtonPlus, Container } from './TodoForm.styles'

export default function () {
  const { addTask } = useTodoStore()

  const { control, resetField, handleSubmit } = useForm<TodoForm>({
    resolver: yupResolver(todoSchema),
  })

  const handleTodoClick = (form: TodoForm) => {
    addTask(form.description)
    resetField('description')
  }

  return (
    <Container id='todo-form' onSubmit={handleSubmit(handleTodoClick)} data-testid='todo-form'>
      <ButtonPlus type='submit'>+</ButtonPlus>
      <Input control={control} name='description' type='text' />
    </Container>
  )
}
