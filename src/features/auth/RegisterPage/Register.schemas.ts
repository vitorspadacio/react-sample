import { object, ref, string } from 'yup'

export interface RegisterForm {
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export const registerSchema = object().shape({
  displayName: string()
    .max(12, 'Nome de exibição máximo de 12 caracteres')
    .required('Nome de exibição é obrigatório'),

  email: string()
    .email('E-mail precisa ter um formato válido')
    .required('E-mail é obrigatório'),

  password: string()
    .min(6, 'Senha mínima de 6 caracteres')
    .required('Senha é obrigatória'),

  confirmPassword: string()
    .oneOf([ref('password'), null], 'Senha e confirmação não conferem')
    .required('Confirmação da senha é obrigatória'),
})
