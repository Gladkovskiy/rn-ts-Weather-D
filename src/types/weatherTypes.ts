export interface ICurrentWeather {
  weather: {
    main: string
    description: string
    icon?: string
  }[]
  main: {
    temp: number
    humidity: number
    pressure: number
    feels_like: number
  }
  visibility: number
  wind: {
    speed: number
  }
  sys: {
    sunrise: number
    sunset: number
  }
}

interface Forecast5Days extends ICurrentWeather {
  dt_txt: string
}

export interface IForecast5Days {
  list: Forecast5Days[]
}
