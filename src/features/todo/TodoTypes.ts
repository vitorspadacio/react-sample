export interface Task {
  id: string,
  description: string,
  isComplete: boolean
}

export interface TodoState {
  tasks: Task[],
  isInserting: boolean,
}
