import {useQuery} from '@tanstack/react-query'
import {ILocation} from '../../types/googlePlaceApi'
import {forecastWeather} from '../../utils/sortArray'
import {getCity, getCurrentWeather, getForecast} from '../api/weatherApi'

export const useCurrentWeather = (data: ILocation, lang: string) => {
  const query = useQuery(
    ['currentWeather', data, lang],
    () => getCurrentWeather(data, lang),
    {
      refetchOnReconnect: 'always',
    },
  )

  return query
}

export const useForecast = (data: ILocation) => {
  const query = useQuery(['forecast', data], () => getForecast(data), {
    select: forecast => forecastWeather(forecast),

    refetchOnReconnect: 'always',
  })

  return query
}

export const useGeocoding = (cityName: string) => {
  const query = useQuery(
    ['geocodingCityName', cityName],
    () => getCity(cityName),
    {
      enabled: false,
    },
  )

  return query
}
