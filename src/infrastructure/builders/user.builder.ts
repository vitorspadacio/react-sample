import { faker } from '@faker-js/faker'
import { User } from '../../features/node-sample/NodeSampleTypes'

faker.seed(123)

export default () => ({
  user: {
    id: faker.number.int(99),
    name: faker.person.firstName(),
    age: faker.number.int(55),
  } as User,

  withName(name: string) {
    this.user.name = name
    return this
  },

  withAge(age: number) {
    this.user.age = age
    return this
  },

  create(): User {
    return this.user
  },
})
