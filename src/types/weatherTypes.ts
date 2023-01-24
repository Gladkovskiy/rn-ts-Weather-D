//data for axios
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
  dt: number
  sys: {
    sunrise: number
    sunset: number
  }
}

export interface IForecast3Hours {
  dt: number
  main: {
    temp: number
    feels_like: number
    humidity: number
  }
  weather: {
    main: string
    description: string
    icon: string
  }
  wind: {
    speed: number
  }
  pop: number
}

export interface IForecast5Days {
  list: IForecast3Hours[]
}

//data for elments
export interface IElementsForecast3Hour {
  dt: number
  temp: number
  windSpeed: number
  humidity: number
  icon: string
  pop: number
}

export interface IElementsForecast1Day {
  date: string
  list: IElementsForecast3Hour[]
}
