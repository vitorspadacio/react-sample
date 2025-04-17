import { router } from '@features/routes'
import mockApi from '@infrastructure/test-helpers/mock-api'
import { render, screen } from '@infrastructure/test-helpers/test-renderer'
import userEvent from '@testing-library/user-event'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import RegisterPage from './RegisterPage'

describe('RegisterPage', () => {
  test('deve exibir formulário vazio de cadastro', () => {
    render(<RegisterPage />)

    expect(screen.getByText('Nome de exibição')).toBeVisible()
    expect(screen.getByText('E-mail')).toBeVisible()
    expect(screen.getByText('Senha')).toBeVisible()
    expect(screen.getByText('Confirmação da senha')).toBeVisible()

    expect(screen.getByTitle('displayName')).toHaveDisplayValue('')
    expect(screen.getByTitle('email')).toHaveDisplayValue('')
    expect(screen.getByTitle('password')).toHaveDisplayValue('')
    expect(screen.getByTitle('confirmPassword')).toHaveDisplayValue('')
  })

  test('deve exibir mensagens de erro ao tentar cadastrar com campos iniciais', async () => {
    render(<RegisterPage />)

    userEvent.click(screen.getByText('Cadastrar'))

    expect(await screen.findByText('Nome de exibição é obrigatório')).toBeVisible()
    expect(screen.getByText('E-mail é obrigatório')).toBeVisible()
    expect(screen.getByText('Senha é obrigatória')).toBeVisible()
    expect(screen.getByText('Confirmação da senha é obrigatória')).toBeVisible()
  })

  test('deve exibir mensagem de erro se número máximo de exibição for maior que 12', async () => {
    render(<RegisterPage />)

    await userEvent.type(screen.getByTitle('displayName'), '1234567890123')
    userEvent.click(screen.getByText('Cadastrar'))

    expect(await screen.findByText('Nome de exibição máximo de 12 caracteres')).toBeVisible()
    expect(screen.getByTitle('displayName').getAttribute('haserror')).toBe('true')
  })

  test('deve exibir mensagem de erro se formato de e-mail for inválido', async () => {
    render(<RegisterPage />)

    await userEvent.type(screen.getByTitle('email'), 'a.com.br')
    userEvent.click(screen.getByText('Cadastrar'))

    expect(await screen.findByText('E-mail precisa ter um formato válido')).toBeVisible()
    expect(screen.getByTitle('email').getAttribute('haserror')).toBe('true')
  })

  test('deve exibir mensagem de erro se número mínimo da senha for menor que 6', async () => {
    render(<RegisterPage />)

    await userEvent.type(screen.getByTitle('password'), '123')
    userEvent.click(screen.getByText('Cadastrar'))

    expect(await screen.findByText('Senha mínima de 6 caracteres')).toBeVisible()
    expect(screen.getByTitle('password').getAttribute('haserror')).toBe('true')
  })

  test('deve exibir erro se senha e confirmação não forem iguais', async () => {
    render(<RegisterPage />)

    await userEvent.type(screen.getByTitle('password'), '123456')
    await userEvent.type(screen.getByTitle('confirmPassword'), '789012')
    await userEvent.click(screen.getByText('Cadastrar'))

    expect(screen.getByText('Senha e confirmação não conferem')).toBeVisible()
    expect(screen.getByTitle('confirmPassword').getAttribute('haserror')).toBe('true')
  })

  test('deve navegar para tela anterior ao clicar em voltar', async () => {
    const { router: internalRouter } = render(<RegisterPage />)
    jest.spyOn(internalRouter, 'navigate')

    await userEvent.click(screen.getByText('Voltar'))

    expect(internalRouter.navigate).toHaveBeenCalledWith(-1)
  })

  test('deve exibir toast de sucesso e redirecionar ao cadastrar', async () => {
    mockApi(createUserWithEmailAndPassword).mockResolvedValue({})
    render(<RegisterPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.type(screen.getByTitle('displayName'), 'Foo Bar')
    await userEvent.type(screen.getByTitle('email'), 'foo@bar.com')
    await userEvent.type(screen.getByTitle('password'), 'foobarpassword')
    await userEvent.type(screen.getByTitle('confirmPassword'), 'foobarpassword')
    await userEvent.click(screen.getByText('Cadastrar'))

    expect(screen.getByTitle('displayName').getAttribute('haserror')).toBe('false')
    expect(screen.getByTitle('displayName').getAttribute('haserror')).toBe('false')
    expect(screen.getByTitle('email').getAttribute('haserror')).toBe('false')
    expect(screen.getByTitle('password').getAttribute('haserror')).toBe('false')
    expect(screen.getByTitle('confirmPassword').getAttribute('haserror')).toBe('false')
    expect(await screen.findByText('Cadastro feito com sucesso!')).toBeVisible()
    expect(router.navigate).toHaveBeenCalledWith('/auth/login')
  })

  test('deve exibir toast de erro quando api de cadastro dar erro', async () => {
    mockApi(createUserWithEmailAndPassword).mockRejectedValue({ code: 'auth/email-already-in-use' })
    render(<RegisterPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.type(screen.getByTitle('displayName'), 'Foo Bar')
    await userEvent.type(screen.getByTitle('email'), 'foo@bar.com')
    await userEvent.type(screen.getByTitle('password'), 'foobarpassword')
    await userEvent.type(screen.getByTitle('confirmPassword'), 'foobarpassword')
    await userEvent.click(screen.getByText('Cadastrar'))

    expect(await screen.findByText('E-mail já cadastrado')).toBeVisible()
  })

  test('deve exibir toast de erro genérico quando api de cadastro dar erro', async () => {
    mockApi(createUserWithEmailAndPassword).mockRejectedValue({ code: 'error' })
    render(<RegisterPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.type(screen.getByTitle('displayName'), 'Foo Bar')
    await userEvent.type(screen.getByTitle('email'), 'foo@bar.com')
    await userEvent.type(screen.getByTitle('password'), 'foobarpassword')
    await userEvent.type(screen.getByTitle('confirmPassword'), 'foobarpassword')
    await userEvent.click(screen.getByText('Cadastrar'))

    expect(await screen.findByText('error')).toBeVisible()
  })
})
