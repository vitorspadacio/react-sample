import { TodoStore } from './TodoStore'

export const selectTasks = (state: TodoStore) => state.tasks
