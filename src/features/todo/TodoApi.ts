import axios from 'axios'

export default {
  getGuid: (): Promise<any> => axios.get('https://www.uuidgenerator.net/api/guid'),
}
