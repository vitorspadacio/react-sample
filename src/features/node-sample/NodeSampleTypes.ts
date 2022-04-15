export interface User {
  id: number,
  name: string,
  age: number,
}

export interface NodeSampleState {
  users: User[],
  isLoading: boolean,
  errorMessage: string,
  showDeleteModal: boolean,
}
