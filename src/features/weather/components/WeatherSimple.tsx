import na from '../../../assets/images/na.svg';
import { Weather } from '../WeatherTypes';
import { Day, Info, Simple } from '../pages/WeatherPage/WeatherPage.styles';
import TemperatureText from './TemperatureText';

interface Props {
  color: string,
  weather: Weather | typeof emptyWeather,
  isFarenheit: boolean,
  onClickTemperature: Function,
}

const emptyWeather = {
  date: new Date(),
  day: '-',
  description: '-',
  humidity: '-',
  icon: '-',
  pressure: '-',
  temperature: 0,
  windDirection: '-',
  windSpeed: '/-',
}

export default function ({ color, weather = emptyWeather, isFarenheit, onClickTemperature }: Props) {
  const getImage = () => weather.temperature ? `../../../assets/images/${weather.icon}.svg` : na

  return (
    <Simple color={color}>
      <img src={getImage()} />
      <Info>
        <Day>{weather.day}</Day>
        <TemperatureText
          temperature={weather.temperature}
          isFarenheit={isFarenheit}
          onClick={() => onClickTemperature()}
        />
      </Info>
    </Simple>
  )
}
