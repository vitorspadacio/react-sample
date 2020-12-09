export interface Planet {
  name: string,
  diameter: string,
  rotationPeriod: string,
  population: string,
  climate: string,
  terrain: string,
}

export interface StarWarsState {
  planets: Planet[],
  isLoading: boolean,
}
