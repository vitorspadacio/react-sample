import axios from 'axios'
import { Planet } from './StarWarsTypes'

export default {
  getPlanets: (page: number = 1): Promise<Planet> => axios.get(`${(window as any).apis.starwars}planets/?page=${page}`)
    .then((response) => response.data.results.map((planet) => ({
      name: planet.name,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
      population: planet.population,
      climate: planet.climate,
      terrain: planet.terrain,
    }))),
}
