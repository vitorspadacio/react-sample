import { Button, RedButton } from '@components/Styled/Buttons'
import Modal from 'react-modal'
import { Container, ModalStyle, Title } from './DeleteModal.styles'

interface Props {
  idToDelete: string
  onConfirmClick: Function
  onCancelClick: Function
}

export default function ({ idToDelete, onConfirmClick, onCancelClick }: Props) {
  return (
    <Modal
      appElement={document.getElementById('root')}
      ariaHideApp={import.meta.env.NODE_ENV !== 'test'}
      contentLabel='Delete book modal'
      isOpen={Boolean(idToDelete)}
      style={ModalStyle}>
      <Title>Deseja deletar o livro?</Title>
      <Container>
        <Button onClick={() => onCancelClick()}>Cancelar</Button>
        <RedButton onClick={() => onConfirmClick()}>Confirmar</RedButton>
      </Container>
    </Modal>
  )
}
