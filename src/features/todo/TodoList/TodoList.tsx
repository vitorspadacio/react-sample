import { useTodoStore } from '../TodoStore'
import { Checkbox, Container, Description, ListItem, Remove } from './TodoList.styles'

export default function () {
  const { tasks, toggleTask, removeTask } = useTodoStore()

  const handleTaskToggle = (id) => toggleTask(id)

  const handleRemoveClick = (id) => removeTask(id)

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
        <Remove onClick={() => handleRemoveClick(task.id)}>remover</Remove>
      </ListItem>
    ))

  return <Container id='todo-list'>{listTasks()}</Container>
}
