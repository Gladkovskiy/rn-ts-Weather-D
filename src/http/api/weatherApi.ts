import {$weatherHost, WeatherPath} from '.'
import {ICurrentWeather, IForecast5Days} from '../../types/weatherTypes'
import {ILocation} from '../../types/googlePlaceApi'

export const getCurrentWeather = async ({lat, lng}: ILocation) => {
  const {data} = await $weatherHost.get<ICurrentWeather>(
    WeatherPath.CURRENT_WEATHER,
    {
      params: {
        lat,
        lon: lng,
      },
    },
  )

  return data
}

export const getForecast = async ({lat, lng}: ILocation) => {
  const {
    data: {list},
  } = await $weatherHost.get<IForecast5Days>(WeatherPath.FORECAST_WEATHER, {
    params: {
      lat,
      lon: lng,
    },
  })

  return list
}
