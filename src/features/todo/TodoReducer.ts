import { Types } from './TodoActions'
import { TodoState } from './TodoTypes'

const INITIAL_STATE: TodoState = {
  tasks: [],
  isInserting: false,
}

const insertTask = (state, task) => ({ ...state, tasks: [...state.tasks, task] })

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.InsertTask:
      return insertTask(state, action.task)

    case Types.IsInserting:
      return { ...state, isInserting: true }

    case Types.IsNotInserting:
      return { ...state, isInserting: false }

    default:
      return state
  }
}
