import { useSelector } from 'react-redux'
import Loading from '../../../components/Loading'
import { selectIsLoading, selectPlanets } from '../StarWarsSelectors'
import { Planet } from '../StarWarsTypes'
import { Container, Info, ListItem } from './PlanetsList.styles'

export default () => {
  const planets = useSelector(selectPlanets)
  const isLoading = useSelector(selectIsLoading)

  const renderDetails = (planet: Planet) => (
    <ListItem key={planet.name}>
      <Info><small>Nome</small> <span>{planet.name}</span></Info>
      <Info><small>Clima</small> <span>{planet.climate}</span></Info>
      <Info><small>População</small> <span>{planet.population}m</span></Info>
      <Info><small>Terreno</small> <span>{planet.terrain}</span></Info>
      <Info><small>Rotação</small> <span>{planet.rotationPeriod}</span></Info>
      <Info><small>Diâmetro</small> <span>{planet.diameter} km</span></Info>
    </ListItem>
  )

  return (
    <Container id='planets-list'>
      {isLoading ? <Loading /> : ''}
      {planets.map(renderDetails)}
    </Container>
  )
}
