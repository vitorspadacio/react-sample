import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlanetsList from '../PlanetsList'
import { selectErrorMessage } from '../StarWarsSelectors'
import { actions } from '../StarWarsState'

export default () => {
  const dispatch = useDispatch()
  const errorMessage = useSelector(selectErrorMessage)

  useEffect(() => {
    dispatch(actions.getPlanets())
    return () => { dispatch(actions.setPlanets({ planets: [] })) }
  }, [dispatch])

  return (
    <>
      <h1>Star Wars: Planetas</h1>
      { errorMessage
        ? (<span>Ocorreu um erro. Motivo: {errorMessage}</span>)
        : (<PlanetsList />)}
    </>
  )
}
