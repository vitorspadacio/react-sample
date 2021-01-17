import fetch from '../../fetch'
import { Planet } from './StarWarsTypes'

export default {
  getPlanets: (): Promise<Planet[]> => fetch(
    `${(window as any).apis.starwars}planets/?page=1`,
  )
    .then((response) => response.results.map((planet) => ({
      name: planet.name,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
      population: planet.population,
      climate: planet.climate,
      terrain: planet.terrain,
    }))),
}
