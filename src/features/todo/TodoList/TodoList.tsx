import { selectTasks } from '../TodoSelectors'
import { useTodoStore } from '../TodoStore'
import { Checkbox, Container, Description, ListItem } from './TodoList.styles'

export default function () {
  const { tasks, toggleTask } = useTodoStore()

  const handleTaskToggle = (id) => {
    toggleTask(id)
  }

  const listTasks = () =>
    tasks.map((task) => (
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

  return <Container id='todo-list'>{listTasks()}</Container>
}
