import { Types } from './HomeActions'

const INITIAL_STATE = { texto: 'Texto no redux' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.Inicializar:
      return { ...state, texto: 'Não é mais o texto inicial no redux' }

    default:
      return state
  }
}
