import { useEffect } from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'

export default function () {
  useEffect(() => {
    document.title = 'Todo • React Sample'
  }, [])

  return (
    <>
      <h1>Lista de tarefas</h1>
      <TodoList />
      <TodoForm />
    </>
  )
}
