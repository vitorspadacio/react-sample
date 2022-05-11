import fetch from '../../fetch'
import { User } from './NodeSampleTypes'

const prefix = 'v1/user'

export default {
  getUsers: () => fetch.get<User[]>(
    `${(window as any).apis.nodesample}${prefix}`,
  ),

  getUserById: (id: number) => fetch.get<User>(
    `${(window as any).apis.nodesample}${prefix}/by-id`,
    { id },
  ),

  deleteUser: (id: number) => fetch.delete(
    `${(window as any).apis.nodesample}${prefix}`,
    { id },
  ),

  updateUser: (user: User) => fetch.put(
    `${(window as any).apis.nodesample}${prefix}`,
    { ...user },
  ),

  createUser: (user: User) => fetch.post(
    `${(window as any).apis.nodesample}${prefix}`,
    { ...user },
  ),
}
