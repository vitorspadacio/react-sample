import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from '../TodoActions'
import { Task } from '../TodoTypes'
import { State } from '../../types'

export default () => {
  const tasks = useSelector<State, Task[]>((state) => state.todo.tasks)
  const dispatch = useDispatch()

  const handleTaskToggle = (id) => dispatch(Actions.toggleTask(id))

  const listTasks = () => tasks.map((task) => (
    <li key={task.id}>
      <span>{task.description}</span>
      <input
        type='checkbox'
        title={`${task.description} está completa?`}
        onChange={() => handleTaskToggle(task.id)}
        checked={task.isComplete}
      />
    </li>
  ))

  return (
    <ul>
      {listTasks()}
    </ul>
  )
}
