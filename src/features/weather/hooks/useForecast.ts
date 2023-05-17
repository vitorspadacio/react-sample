import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import WeatherApi from "../WeatherApi";
import { Tuple, Weather } from "../WeatherTypes";

export default (city: string) => {
  const [forecast, setForecast] = useState<Weather[]>([])

  const fetchForecast = async () => {
    try {
      const { data } = await WeatherApi.getForecastByCity(city)
      setForecast(data)
    } catch (error) {
      toast.error('Ocorreu um erro ao obter previsão')
    }
  }

  useEffect(() => {
    if (!city) return
    fetchForecast()
  }, [city])

  const clear = () => setForecast([])

  return [forecast, clear] as Tuple<Weather[]>
}
