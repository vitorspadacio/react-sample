import { Task } from './TodoTypes'

export enum Types {
  CreateTask = 'CREATE_TASK',
  InsertTask = 'INSERT_TASK',
  IsInserting = 'IS_INSERTING',
  IsNotInserting = 'IS_NOT_INSERTING',
}

export const Actions = {
  addTask: (description: string) => ({ type: Types.CreateTask, description }),
  insertTask: (task: Task) => ({ type: Types.InsertTask, task }),
  isInserting: () => ({ type: Types.IsInserting }),
  isNotInserting: () => ({ type: Types.IsNotInserting }),
}
