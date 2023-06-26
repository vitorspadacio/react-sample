import { number, object, string } from 'yup'

export const schema = object({
  id: string(),
  name: string().required('Campo obrigatório'),
  age: number().typeError('Idade deve ser um número').required('Campo obrigatório'),
})
