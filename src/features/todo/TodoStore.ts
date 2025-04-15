import { create } from 'zustand'
import { Task } from './TodoTypes'
import { nanoid } from '@reduxjs/toolkit'

export interface TodoStore {
  tasks: Task[]
  addTask: (description: string) => void
  toggleTask: (id: string) => void
  removeTask: (id: string) => void
}

const initialState = {
  tasks: [
    { id: '1', description: 'Lavar louças', isComplete: true },
    { id: '2', description: 'Arrumar a sala', isComplete: false },
    { id: '3', description: 'Limpar banheiro', isComplete: false },
  ] as Task[],
}

export const useTodoStore = create<TodoStore>((set => ({
  ...initialState,

  addTask: (description) => set(({tasks}) => {
    const newTask = {
      id: nanoid(),
      description,
      isComplete: false,
    } as Task

    return ({ tasks: [...tasks, newTask]})
  }),

  toggleTask: (id) => set(({tasks}) => ({
    tasks: tasks.map((task) => task.id === id ? {...task, completed: !task.isComplete } : task)
  })),

  removeTask: (id) => set(({tasks}) => ({ tasks: tasks.filter((task) => task.id !== id) })),
})))
