import { Types } from './TodoActions'
import { TodoState } from './TodoTypes'

const INITIAL_STATE: TodoState = {
  tasks: [
    { id: '1', description: 'Lavar louças', isComplete: true },
    { id: '2', description: 'Arrumar a sala', isComplete: false },
    { id: '3', description: 'Limpar banheiro', isComplete: false },
  ],
  isInserting: false,
}

const insertTask = (state, task) => ({ ...state, tasks: [...state.tasks, task] })

const toggleTask = (state, id) => {
  const taskIndex = state.tasks.findIndex((task) => task.id === id)
  const selectedTask = state.tasks[taskIndex]
  const toggledCompletion = !selectedTask.isComplete

  return {
    ...state,
    tasks: [
      ...state.tasks.slice(0, taskIndex),
      { ...selectedTask, isComplete: toggledCompletion },
      ...state.tasks.slice(taskIndex + 1),
    ],
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.InsertTask:
      return insertTask(state, action.task)

    case Types.IsInserting:
      return { ...state, isInserting: true }

    case Types.IsNotInserting:
      return { ...state, isInserting: false }

    case Types.ToggleTask:
      return toggleTask(state, action.id)

    default:
      return state
  }
}
