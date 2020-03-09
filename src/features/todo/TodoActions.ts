import { Task } from './TodoTypes'

export enum Types {
  CreateTask = 'CREATE_TASK',
  InsertTask = 'INSERT_TASK',
  IsInserting = 'IS_INSERTING',
  IsNotInserting = 'IS_NOT_INSERTING',
  ToggleTask = 'TOGGLE_TASK',
}

export const Actions = {
  createTask: (description: string) => ({ type: Types.CreateTask, description }),
  insertTask: (task: Task) => ({ type: Types.InsertTask, task }),
  isInserting: () => ({ type: Types.IsInserting }),
  isNotInserting: () => ({ type: Types.IsNotInserting }),
  toggleTask: (id: string) => ({ type: Types.ToggleTask, id }),
}
