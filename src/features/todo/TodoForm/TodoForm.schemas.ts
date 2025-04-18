import { object, string } from 'yup'

export interface TodoForm {
  description: string
}

export const todoSchema = object().shape({
  description: string().required('Descrição é obrigatório'),
})
