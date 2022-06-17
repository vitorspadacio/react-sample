import { object, string } from 'yup'

export interface LoginForm {
  email: string,
  password: string,
}

export const loginSchema = object().shape({
  email: string()
    .email('E-mail precisa ter um formato válido')
    .required('E-mail é obrigatório'),

  password: string()
    .required('Senha é obrigatória'),
})
