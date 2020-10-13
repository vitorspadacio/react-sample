import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import { TodoState, Task } from './TodoTypes'

const initialState: TodoState = {
  tasks: [
    { id: '1', description: 'Lavar louças', isComplete: true },
    { id: '2', description: 'Arrumar a sala', isComplete: false },
    { id: '3', description: 'Limpar banheiro', isComplete: false },
  ],
}

const addTask = (state: TodoState, action: PayloadAction<{ description }>) => {
  const newTask = {
    id: nanoid(),
    description: action.payload.description,
    isComplete: false,
  } as Task

  state.tasks.push(newTask)
}

const toggleTask = (state: TodoState, action: PayloadAction<string>) => {
  const task = state.tasks.find(({ id }) => id === action.payload)
  task.isComplete = !task.isComplete
}

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask,
    toggleTask,
  },
})

export default slice.reducer

export const { actions } = slice
