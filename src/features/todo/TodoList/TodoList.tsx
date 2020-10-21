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
        type='checkbox'
        title={`${task.description} está completa?`}
        onChange={() => handleTaskToggle(task.id)}
        checked={task.isComplete}
      />
      <span>{task.description}</span>
    </li>
  ))

  return (
    <ul id='todo-list'>
      {listTasks()}
    </ul>
  )
}
