import fetch from '../../fetch'
import { User } from './NodeSampleTypes'

const prefix = 'v1/user'

export default {
  getUsers: (): Promise<User[]> => fetch.get(
    `${(window as any).apis.nodesample}${prefix}`,
  ),

  deleteUser: (id: number): Promise<number> => fetch.delete(
    `${(window as any).apis.nodesample}${prefix}`,
    { id },
  ),
}
