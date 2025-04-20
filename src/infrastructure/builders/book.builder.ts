import { faker } from '@faker-js/faker'

faker.seed(123)

interface BookReturn {
  id: string
  data: () => {
    edition: number
    link: string
    name: string
    series: string
  }
}

const data = {
  edition: faker.number.int(10),
  link: faker.internet.url(),
  name: faker.book.title(),
  series: faker.book.series(),
}

export default () => ({
  book: {
    id: faker.string.uuid(),
    data: () => data,
  } as BookReturn,

  create(): BookReturn {
    return this.book
  },
})
