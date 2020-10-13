import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../TodoState'
import { selectTasks } from '../TodoSelectors'

export default () => {
  const tasks = useSelector(selectTasks)
  const dispatch = useDispatch()

  const handleTaskToggle = (id) => dispatch(actions.toggleTask(id))

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
