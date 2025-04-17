jest.mock('firebase/firestore/lite')
jest.mock('firebase/storage')
jest.mock('firebase/auth')

jest.mock('@infrastructure/fetch.ts')

const fetchMock = require('jest-fetch-mock')
fetchMock.enableMocks()
fetchMock.mockResponse(JSON.stringify({ success: true }))

window.apis = {
  dnd5e: 'http://foo',
}
