import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link, useSearchParams } from 'react-router-dom'
import google from '../../../assets/images/google.svg'
import Input from '../../../components/Input'
import { selectUser } from '../AuthSelectors'
import { actions } from '../AuthState'
import { BackButton, Buttons, Container, Form } from '../AuthStyles'
import { LoginForm, loginSchema } from './Login.schemas'
import { EnterButton, GoogleButton, Register } from './LoginPage.styles'

export default function () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [searchParams] = useSearchParams()
  const backUrl = searchParams.get('back')

  const { control, handleSubmit, resetField } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  })

  useEffect(() => {
    if (user) navigate('/')
    document.title = 'Entrar • Untitled Lounge'
  }, [navigate, user])

  const handleEnterClick = async (login: LoginForm) => {
    dispatch(actions.logIn(login))
    resetField('password')
  }

  const handleBackClick = () => (backUrl ? navigate(backUrl) : navigate('/'))

  const handleGoogleClick = () => dispatch(actions.googleLogIn())

  return (
    <Container>
      <h1>Entrar</h1>

      <Form onSubmit={handleSubmit(handleEnterClick)}>
        <Input control={control} name='email' placeholder='E-mail' type='text' />

        <Input control={control} name='password' placeholder='Senha' type='password' />

        <Buttons>
          <EnterButton type='submit'>Entrar</EnterButton>

          <BackButton type='button' onClick={handleBackClick}>
            Voltar
          </BackButton>

          <GoogleButton type='button' onClick={handleGoogleClick}>
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
