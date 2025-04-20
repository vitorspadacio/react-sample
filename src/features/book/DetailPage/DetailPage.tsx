import Input from '@components/Input'
import { router } from '@features/routes'
import { useAppStore } from '@features/store'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useParams } from 'react-router'
import BookApi from '../BookApi'
import { useBookStore } from '../BookStore'
import { BackButton, Buttons, Container, Form, RegisterButton } from '../BookStyles'
import { BookForm, bookSchema } from './DetailsPage.schemas'

const routes = {
  edit: '/book/edit/',
  add: '/book/add',
}

export default function () {
  const isLoading = useAppStore((state) => state.loadingStack > 0)
  const { add, edit } = useBookStore()
  const { id } = useParams()

  const location = useLocation()
  const isEdit = useMemo(() => location.pathname.includes(routes.edit), [location])
  const titleText = isEdit ? 'Editar livro' : 'Criar livro'
  const buttonText = isEdit ? 'Salvar' : 'Criar'

  const { control, setValue, handleSubmit } = useForm<BookForm>({
    resolver: yupResolver(bookSchema),
  })

  useEffect(() => {
    const title = isEdit ? 'Editar' : 'Criar'
    document.title = `${title} • Livro • React Sample`
  }, [isEdit])

  const fetchBook = useCallback(async () => {
    const book = await BookApi.getBookById(id)
    setValue('id', book.id, { shouldValidate: true })
    setValue('edition', book.edition, { shouldValidate: true })
    setValue('link', book.link, { shouldValidate: true })
    setValue('name', book.name, { shouldValidate: true })
    setValue('series', book.series, { shouldValidate: true })
  }, [id, setValue])

  useEffect(() => {
    if (isEdit) {
      fetchBook()
    }
  }, [fetchBook, isEdit])

  const handleSubmitClick = (form: BookForm) => {
    if (isEdit) edit(form)
    else add(form)
  }

  const handleBackClick = () => router.navigate(-1)

  return (
    <Container>
      <h1>{titleText}</h1>

      <Form onSubmit={handleSubmit(handleSubmitClick)}>
        <Input disabled control={control} name='id' label='ID' type='text' />

        <Input disabled={isLoading} control={control} name='name' label='Nome' type='text' />

        <Input disabled={isLoading} control={control} name='link' label='Link' type='text' />

        <Input disabled={isLoading} control={control} name='series' label='Série' type='text' />

        <Input disabled={isLoading} control={control} name='edition' label='Volume' type='number' />

        <Buttons>
          <RegisterButton disabled={isLoading} type='submit'>
            {buttonText}
          </RegisterButton>

          <BackButton disabled={isLoading} type='button' onClick={handleBackClick}>
            Voltar
          </BackButton>
        </Buttons>
      </Form>
    </Container>
  )
}
