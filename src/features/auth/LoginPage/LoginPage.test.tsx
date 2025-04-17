import { router } from '@features/routes'
import mockApi from '@infrastructure/test-helpers/mock-api'
import { render, screen } from '@infrastructure/test-helpers/test-renderer'
import userEvent from '@testing-library/user-event'
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import LoginPage from './LoginPage'

const user = { providerData: [{ displayName: 'Foo' }] }

describe('LoginPage', () => {
  test('deve exibir formulário vazio de login', () => {
    render(<LoginPage />)

    expect(screen.getByPlaceholderText('E-mail')).toBeVisible()
    expect(screen.getByPlaceholderText('Senha')).toBeVisible()
    expect(screen.getByText('Não tem cadastro?')).toBeVisible()
    expect(screen.getByText('Cadastre-se!')).toBeVisible()
  })

  test('deve exibir mensagens de erro ao tentar logar com campos iniciais', async () => {
    render(<LoginPage />)

    userEvent.click(screen.getByTitle('Entrar'))

    expect(await screen.findByText('E-mail é obrigatório')).toBeVisible()
    expect(screen.getByText('Senha é obrigatória')).toBeVisible()
  })

  test('deve navegar para tela anterior ao clicar em voltar', async () => {
    const { router: internalRouter } = render(<LoginPage />)
    jest.spyOn(internalRouter, 'navigate')

    await userEvent.click(screen.getByText('Voltar'))

    expect(internalRouter.navigate).toHaveBeenCalledWith(-1)
  })

  test('deve navegar para tela de cadastro ao clicar em cadastre-se', async () => {
    const { router: internalRouter } = render(<LoginPage />)
    jest.spyOn(internalRouter, 'navigate')

    await userEvent.click(screen.getByText('Cadastre-se!'))

    expect(internalRouter.navigate).toHaveBeenCalledWith('/auth/register', expect.any(Object))
  })

  test('deve navegar para tela de login ao clicar em entrar no menu', async () => {
    render(<LoginPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.click(screen.getByTitle('Entrar pelo menu'))

    expect(router.navigate).toHaveBeenCalledWith('/auth/login')
  })

  test('deve exibir toast de sucesso e redirecionar para home', async () => {
    mockApi(signInWithEmailAndPassword).mockResolvedValue({ user })
    render(<LoginPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.type(screen.getByTitle('email'), 'foo@bar.com')
    await userEvent.type(screen.getByTitle('password'), 'foobarpassword')
    await userEvent.click(screen.getByTitle('Entrar'))

    expect(await screen.findByText('Entrou com sucesso')).toBeVisible()
    expect(await screen.findByText('Foo')).toBeVisible()
    expect(router.navigate).toHaveBeenCalledWith('/')
  })

  test('deve exibir toast de sucesso e redirecionar para home ao entrar com Google', async () => {
    mockApi(signInWithPopup).mockResolvedValue({ user })
    render(<LoginPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.click(screen.getByTitle('Entrar com Google'))

    expect(await screen.findByText('Entrou com sucesso')).toBeVisible()
    expect(router.navigate).toHaveBeenCalledWith('/')
  })

  test('deve fechar sessão de login ao clicar em sair no menu', async () => {
    mockApi(signInWithPopup).mockResolvedValue({ user })
    mockApi(signOut).mockResolvedValue({})
    render(<LoginPage />)

    await userEvent.click(screen.getByTitle('Entrar com Google'))
    await screen.findByText('Entrou com sucesso')
    await userEvent.click(screen.getByText('Sair'))

    expect(await screen.findByText('Você saiu com sucesso')).toBeVisible()
    expect(router.navigate).toHaveBeenCalledWith('/')
  })

  test('deve exibir mensagem de erro ao tentar deslogar e ter erro', async () => {
    mockApi(signInWithPopup).mockResolvedValue({ user })
    mockApi(signOut).mockRejectedValue({ code: 'error' })
    render(<LoginPage />)

    await userEvent.click(screen.getByTitle('Entrar com Google'))
    await screen.findByText('Entrou com sucesso')
    await userEvent.click(screen.getByText('Sair'))

    expect(await screen.findByText('error')).toBeVisible()
  })

  test('deve exibir toast de erro quando api de login dar erro', async () => {
    mockApi(signInWithEmailAndPassword).mockRejectedValue({ code: 'auth/wrong-password' })
    render(<LoginPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.type(screen.getByTitle('email'), 'foo@bar.com')
    await userEvent.type(screen.getByTitle('password'), 'foobarpassword')
    await userEvent.click(screen.getByTitle('Entrar'))

    expect(await screen.findByText('Senha incorreta')).toBeVisible()
  })

  test('deve exibir toast de erro genérico quando api de login dar erro', async () => {
    mockApi(signInWithEmailAndPassword).mockRejectedValue({ code: 'error' })
    render(<LoginPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.type(screen.getByTitle('email'), 'foo@bar.com')
    await userEvent.type(screen.getByTitle('password'), 'foobarpassword')
    await userEvent.click(screen.getByTitle('Entrar'))

    expect(await screen.findByText('error')).toBeVisible()
  })

  test('deve exibir toast de erro quando api de login do Google der erro', async () => {
    mockApi(signInWithPopup).mockRejectedValue({ code: 'auth/user-not-found' })
    render(<LoginPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.click(screen.getByTitle('Entrar com Google'))

    expect(await screen.findByText('Usuário não encontrado')).toBeVisible()
  })

  test('deve exibir toast de erro genérico quando api de login do Google der erro', async () => {
    mockApi(signInWithPopup).mockRejectedValue({ code: 'error' })
    render(<LoginPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.click(screen.getByTitle('Entrar com Google'))

    expect(await screen.findByText('error')).toBeVisible()
  })
})
