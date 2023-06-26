import { yupResolver } from '@hookform/resolvers/yup'
import {
  ReactNode, useCallback, useEffect, useMemo,
} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Button, OutlineButton } from '../../../components/Styled/Buttons'
import { Input } from '../../../components/Styled/Input'
import NodeSampleApi from '../NodeSampleApi'
import { actions } from '../NodeSampleState'
import { schema } from './UserDetailPage.schema'
import {
  ButtonContainer, Container, Error, Label,
} from './UserDetailPage.syles'

const routes = {
  edit: '/node-sample/edit/',
  create: '/node-sample/create/',
}

export default function () {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const isEdit = useMemo(() => location.pathname.includes(routes.edit), [location])

  useEffect(() => {
    const title = isEdit ? 'Editar' : 'Criar'
    document.title = `${title} • Usuários • React Sample`
  }, [isEdit])

  const titleText = isEdit ? 'Edição do usuário' : 'Criação do usuário'
  const buttonText = isEdit ? 'Salvar' : 'Criar'

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) })

  const fetchUser = useCallback(async () => {
    const { data: { name, age } } = await NodeSampleApi.getUserById(Number(id))
    setValue('id', id, { shouldValidate: true })
    setValue('name', name, { shouldValidate: true })
    setValue('age', age, { shouldValidate: true })
  }, [id, setValue])

  useEffect(() => {
    if (isEdit) { fetchUser() }
  }, [fetchUser, isEdit])

  const onSubmit = (user) => (isEdit
    ? dispatch(actions.updateUser(user)) : dispatch(actions.createUser(user)))

  const handleBackClick = () => navigate('/node-sample')

  return (
    <Container>
      <h1>{titleText}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span>ID</span>
          <Input {...register('id')} disabled />
          <Error>{errors.id?.message.toString()}</Error>
        </Label>

        <Label>
          <span>Nome</span>
          <Input
            alt='nome'
            {...register('name')}
            haserror={errors.name?.message}
          />
          <Error>{errors.name?.message.toString()}</Error>
        </Label>

        <Label>
          <span>Idade</span>
          <Input
            alt='idade'
            {...register('age')}
            haserror={errors.age?.message}
          />
          <Error>{errors.age?.message.toString()}</Error>
        </Label>

        <ButtonContainer>
          <Button type='submit' disabled={!isValid}>{buttonText}</Button>
          <OutlineButton onClick={handleBackClick}>Voltar</OutlineButton>
        </ButtonContainer>
      </form>
    </Container>
  )
}
