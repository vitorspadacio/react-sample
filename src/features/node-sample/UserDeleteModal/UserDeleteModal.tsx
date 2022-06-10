import Modal from 'react-modal'
import { Button, RedButton } from '../../../components/Styled/Buttons'
import { Container, ModalStyle, Title } from './UserDeleteModal.styles'

interface Props {
  idToDelete: number,
  onConfirmClick: Function,
  onCancelClick: Function,
}

export default function ({ idToDelete, onConfirmClick, onCancelClick }: Props) {
  return (
    <Modal
      appElement={document.getElementById('root')}
      ariaHideApp={process.env.NODE_ENV !== 'test'}
      contentLabel='Delete user modal'
      isOpen={Boolean(idToDelete)}
      style={ModalStyle}
    >
      <Title>Deseja deletar o usuário?</Title>
      <Container>
        <Button onClick={() => onCancelClick()}>Cancelar</Button>
        <RedButton onClick={() => onConfirmClick()}>Confirmar</RedButton>
      </Container>
    </Modal>
  )
}
