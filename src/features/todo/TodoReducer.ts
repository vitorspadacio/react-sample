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

export default (state = INITIAL_STATE, action) => ({
  [Types.InsertTask]: insertTask(state, action.task),
  [Types.IsInserting]: { ...state, isInserting: true },
  [Types.IsNotInserting]: { ...state, isInserting: false },
  [Types.ToggleTask]: toggleTask(state, action.id),
})[action.type]
