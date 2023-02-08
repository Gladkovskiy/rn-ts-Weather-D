import {useQuery} from '@tanstack/react-query'
import {ILocation} from '../../types/googlePlaceApi'
import {forecastWeather} from '../../utils/sortArray'
import {getCurrentWeather, getForecast} from '../api/weatherApi'

export const useCurrentWeather = (data: ILocation) => {
  const query = useQuery(
    ['currentWeather', data],
    () => getCurrentWeather(data),
    {},
  )

  return query
}

export const useForecast = (data: ILocation) => {
  const query = useQuery(['forecast', data], () => getForecast(data), {
    select: forecast => forecastWeather(forecast),
  })

  return query
}
