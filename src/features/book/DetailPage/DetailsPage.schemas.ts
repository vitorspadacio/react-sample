import { number, object, string } from 'yup'

export interface BookForm {
  id: string
  edition: number
  link: string
  name: string
  series: string
}

export const bookSchema = object().shape({
  id: string(),
  edition: number().min(0, 'Volume mínimo é 0 ou acima').required('Volume é obrigatório'),
  link: string().required('Link é obrigatório'),
  name: string().required('Nome é obrigatório'),
  series: string().required('Série é obrigatória'),
})
