import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../../components/Loading'
import { selectIsLoading, selectPlanets } from '../StarWarsSelectors'
import { Planet } from '../StarWarsTypes'
import './PlanetsList.scss'

export default () => {
  const planets = useSelector(selectPlanets)
  const isLoading = useSelector(selectIsLoading)

  const renderDetails = (planet: Planet) => (
    <li>
      <div><small>Nome</small> <span>{planet.name}</span></div>
      <div><small>Clima</small> <span>{planet.climate}</span></div>
      <div><small>População</small> <span>{planet.population}m</span></div>
      <div><small>Terreno</small> <span>{planet.terrain}</span></div>
      <div><small>Rotação</small> <span>{planet.rotationPeriod}</span></div>
      <div><small>Diâmetro</small> <span>{planet.diameter} km</span></div>
    </li>
  )

  return (
    <ul id='planets-list'>
      {isLoading ? <Loading /> : ''}
      {planets.map(renderDetails)}
    </ul>
  )
}
