import fetch from '../../fetch'
import { User } from './NodeSampleTypes'

const prefix = 'v1/user'

export default {
  getUsers: (): Promise<User[]> => fetch(
    `${(window as any).apis.nodesample}${prefix}`,
  ),
}
