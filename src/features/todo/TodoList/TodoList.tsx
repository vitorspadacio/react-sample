import { useDispatch, useSelector } from 'react-redux'
import { selectTasks } from '../TodoSelectors'
import { actions } from '../TodoState'
import {
  Checkbox, Container, Description, ListItem,
} from './TodoList.styles'

export default function () {
  const tasks = useSelector(selectTasks)
  const dispatch = useDispatch()

  const handleTaskToggle = (id) => dispatch(actions.toggleTask(id))

  const listTasks = () => tasks.map((task) => (
    <ListItem key={task.id}>
      <Checkbox
        id={task.id}
        type='checkbox'
        title={`${task.description} está completa?`}
        onChange={() => handleTaskToggle(task.id)}
        checked={task.isComplete}
      />
      <Description htmlFor={task.id}>{task.description}</Description>
    </ListItem>
  ))

  return (
    <Container id='todo-list'>
      {listTasks()}
    </Container>
  )
}
