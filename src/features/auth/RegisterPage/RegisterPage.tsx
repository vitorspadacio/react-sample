import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Input from '../../../components/Input'
import { actions } from '../AuthState'
import {
  BackButton, Buttons, Container, Form,
} from '../AuthStyles'
import { RegisterForm, registerSchema } from './Register.schemas'
import { RegisterButton } from './RegisterPage.styles'

export default function () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  })

  useEffect(() => {
    document.title = 'Cadastro • Untitled Lounge'
  }, [])

  const handleRegisterClick = (register: RegisterForm) => dispatch(actions.register(register))

  const handleBackClick = () => navigate('/')

  return (
    <Container>
      <h1>Cadastrar</h1>

      <Form onSubmit={handleSubmit(handleRegisterClick)}>
        <Input
          control={control}
          name='displayName'
          label='Nome de exibição'
          type='text'
        />

        <Input
          control={control}
          name='email'
          label='E-mail'
          type='text'
        />

        <Input
          control={control}
          name='password'
          label='Senha'
          type='password'
        />

        <Input
          control={control}
          name='confirmPassword'
          label='Confirmação da senha'
          type='password'
        />

        <Buttons>
          <RegisterButton type='submit'>Cadastrar</RegisterButton>

          <BackButton
            type='button'
            onClick={handleBackClick}
          >
            Voltar
          </BackButton>
        </Buttons>
      </Form>
    </Container>
  )
}
