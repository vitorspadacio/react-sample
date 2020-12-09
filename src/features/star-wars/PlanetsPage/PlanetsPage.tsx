import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading, selectPlanets } from '../StarWarsSelectors'
import { actions } from '../StarWarsState'
import Loading from '../../../components/Loading'
import './PlanetsPage.scss'

export default () => {
  const planets = useSelector(selectPlanets)
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getPlanets())
  }, [dispatch])

  return (
    <ul id='planets-list'>
      { isLoading ? <Loading /> : ''}
      { planets.map((planet) => (<li>{planet.name}</li>))}
    </ul>
  )
}
