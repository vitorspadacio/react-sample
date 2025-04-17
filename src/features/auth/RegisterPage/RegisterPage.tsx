import Input from '@components/Input'
import { useAppStore } from '@features/store'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useAuthStore } from '../AuthStore'
import { BackButton, Buttons, Container, Form } from '../AuthStyles'
import { RegisterForm, registerSchema } from './Register.schemas'
import { RegisterButton } from './RegisterPage.styles'

export default function () {
  const navigate = useNavigate()
  const isLoading = useAppStore((state) => state.loadingStack > 0)
  const { register } = useAuthStore()

  const { control, handleSubmit } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  })

  useEffect(() => {
    document.title = 'Cadastro • React Sample'
  }, [])

  const handleRegisterClick = (form: RegisterForm) => register(form)

  const handleBackClick = () => navigate(-1)

  return (
    <Container>
      <h1>Cadastramento</h1>

      <Form onSubmit={handleSubmit(handleRegisterClick)}>
        <Input
          disabled={isLoading}
          control={control}
          name='displayName'
          label='Nome de exibição'
          type='text'
        />

        <Input disabled={isLoading} control={control} name='email' label='E-mail' type='text' />

        <Input
          disabled={isLoading}
          control={control}
          name='password'
          label='Senha'
          type='password'
        />

        <Input
          disabled={isLoading}
          control={control}
          name='confirmPassword'
          label='Confirmação da senha'
          type='password'
        />

        <Buttons>
          <RegisterButton disabled={isLoading} type='submit'>
            Cadastrar
          </RegisterButton>

          <BackButton disabled={isLoading} type='button' onClick={handleBackClick}>
            Voltar
          </BackButton>
        </Buttons>
      </Form>
    </Container>
  )
}
