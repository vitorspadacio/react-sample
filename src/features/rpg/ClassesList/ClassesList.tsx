import { useRpgStore } from '../RpgStore'
import { RpgClass } from '../RpgTypes'
import { Container, Info, ListItem } from './ClassesList.style'

export default function () {
  const { rpgClasses } = useRpgStore()

  const renderDetails = (rpgClass: RpgClass) => (
    <ListItem key={rpgClass.name}>
      <Info><small>Nome</small> <span>{rpgClass.name}</span></Info>
      <Info><small>Dado de vida</small> <span>{rpgClass.hitDie}</span></Info>
      <Info><small>Salvaguardas</small> <span>{rpgClass.savingThrows.join(', ')}</span></Info>
      <Info><small>Subclasses</small> <span>{rpgClass.subclasses.join(', ')}</span></Info>
    </ListItem>
  )

  return (
    <Container id='classes-list'>
      {rpgClasses.map(renderDetails)}
    </Container>
  )
}
