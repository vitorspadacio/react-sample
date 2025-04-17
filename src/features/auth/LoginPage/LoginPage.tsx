import google from '@assets/images/google.svg'
import Input from '@components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { useAuthStore } from '../AuthStore'
import { BackButton, Buttons, Container, Form } from '../AuthStyles'
import { LoginForm, loginSchema } from './Login.schemas'
import { EnterButton, GoogleButton, Register } from './LoginPage.styles'

export default function () {
  const { logIn, googleLogIn } = useAuthStore()
  const navigate = useNavigate()

  const { control, handleSubmit, resetField } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  })

  useEffect(() => {
    document.title = 'Entrar • React Sample'
  }, [])

  const handleEnterClick = async (login: LoginForm) => {
    logIn(login.email, login.password)
    resetField('password')
  }

  const handleBackClick = () => navigate(-1)

  const handleGoogleClick = () => googleLogIn()

  return (
    <Container>
      <h1>Entrar</h1>

      <Form onSubmit={handleSubmit(handleEnterClick)}>
        <Input control={control} name='email' placeholder='E-mail' type='text' />

        <Input control={control} name='password' placeholder='Senha' type='password' />

        <Buttons>
          <EnterButton title='Entrar' type='submit'>
            Entrar
          </EnterButton>

          <BackButton type='button' onClick={handleBackClick}>
            Voltar
          </BackButton>

          <GoogleButton title='Entrar com Google' type='button' onClick={handleGoogleClick}>
            <img alt='google log in' src={google} />
            Entrar com Google
          </GoogleButton>
        </Buttons>
      </Form>

      <Register>
        <span>Não tem cadastro?</span>
        <Link to='/auth/register'>Cadastre-se!</Link>
      </Register>
    </Container>
  )
}
