export enum Types {
  Inicializar = 'INICIALIZAR',
}

export default {
  inicializar: () => ({ type: Types.Inicializar }),
}
