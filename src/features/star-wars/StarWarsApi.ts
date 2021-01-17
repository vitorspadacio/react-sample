import { Planet } from './StarWarsTypes'

export default {
  getPlanets: (page: number = 1): Promise<Planet[]> => fetch(
    `${(window as any).apis.starwars}planets/?page=${page}`,
  )
    .then((response) => response.json())
    .then((response) => response.results.map((planet) => ({
      name: planet.name,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
      population: planet.population,
      climate: planet.climate,
      terrain: planet.terrain,
    }))),
}
