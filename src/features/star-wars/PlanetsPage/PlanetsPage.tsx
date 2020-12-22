import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PlanetsList from '../PlanetsList/PlanetsList'
import { actions } from '../StarWarsState'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getPlanets())
    return () => dispatch(actions.setPlanets({ planets: [] }))
  }, [dispatch])

  return (
    <>
      <h1>Star Wars: Planetas</h1>
      <PlanetsList />
    </>
  )
}
