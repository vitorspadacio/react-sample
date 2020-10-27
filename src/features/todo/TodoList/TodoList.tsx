import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './TodoList.scss'
import { actions } from '../TodoState'
import { selectTasks } from '../TodoSelectors'

export default () => {
  const tasks = useSelector(selectTasks)
  const dispatch = useDispatch()

  const handleTaskToggle = (id) => dispatch(actions.toggleTask(id))

  const listTasks = () => tasks.map((task) => (
    <li key={task.id}>
      <input
        id={task.id}
        type='checkbox'
        title={`${task.description} está completa?`}
        onChange={() => handleTaskToggle(task.id)}
        checked={task.isComplete}
      />
      <label htmlFor={task.id}>{task.description}</label>
    </li>
  ))

  return (
    <ul id='todo-list'>
      {listTasks()}
    </ul>
  )
}
