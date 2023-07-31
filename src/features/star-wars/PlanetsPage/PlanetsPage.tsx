import { useEffect } from 'react'
import { useQuery } from 'react-query'
import PlanetsList from '../PlanetsList'
import StarWarsApi from '../StarWarsApi'

export default function () {
  const { data, status, error, isError, isLoading } = useQuery('planets', StarWarsApi.getPlanets)
  useEffect(() => {
    document.title = 'Star Wars • React Sample'
  }, [])

  const render = () => isError ? (<span>Ocorreu um erro. Motivo: {error.toString()}</span>) :
    isLoading ? (<span>Carregando...</span>) :
    (<PlanetsList planets={data} />)

  return (
    <>
      <h1>Star Wars: Planetas</h1>
      { render() }
    </>
  )
}
