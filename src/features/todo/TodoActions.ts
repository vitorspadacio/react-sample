import { Task } from './TodoTypes'

export enum Types {
  CreateTask = 'todo/createTask',
  InsertTask = 'todo/insertTask',
  IsInserting = 'todo/isInserting',
  IsNotInserting = 'todo/isNotInserting',
  ToggleTask = 'todo/toggleTask',
}

export const Actions = {
  createTask: (description: string) => ({ type: Types.CreateTask, description }),
  insertTask: (task: Task) => ({ type: Types.InsertTask, task }),
  isInserting: () => ({ type: Types.IsInserting }),
  isNotInserting: () => ({ type: Types.IsNotInserting }),
  toggleTask: (id: string) => ({ type: Types.ToggleTask, id }),
}
