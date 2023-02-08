import {
  IElementsForecast1Day,
  IElementsForecast3Hour,
  IForecast3Hours,
} from '../types/weatherTypes'

const originalData = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      main: {
        temp: -5.08,
        feels_like: -12.08,
        humidity: 71,
      },
      weather: [
        {
          main: 'Clear',
          description: 'ясно',
          icon: '01d',
        },
      ],

      wind: {
        speed: 6.79,
      },
      pop: 0,
      dt_txt: '2023-02-08 12:00:00',
    },

    {
      main: {
        temp: -9.18,
        feels_like: -14.38,
        humidity: 94,
      },
      weather: [
        {
          main: 'Clear',
          description: 'ясно',
          icon: '01n',
        },
      ],
      wind: {
        speed: 2.88,
      },
      pop: 0,
      dt_txt: '2023-02-09 00:00:00',
    },
    {
      main: {
        temp: -9.77,
        feels_like: -13.49,
        humidity: 95,
      },
      weather: [
        {
          main: 'Clear',
          description: 'ясно',
          icon: '01n',
        },
      ],
      wind: {
        speed: 1.8,
      },
      pop: 0,
      dt_txt: '2023-02-09 03:00:00',
    },

    {
      main: {
        temp: -5.39,
        feels_like: -7.61,
        humidity: 80,
      },
      weather: [
        {
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n',
        },
      ],
      wind: {
        speed: 1.35,
      },
      pop: 0,
      dt_txt: '2023-02-10 03:00:00',
    },
  ],
}

const time = (dt_txt: string) => {
  const time = dt_txt.split(' ')[1].split(':')
  time.pop()
  return time.join(':')
}

const dateToDayandMonth = (dt_txt: string) => {
  const temp = dt_txt.split(' ')[0].split('-')
  temp.shift()
  return temp.reverse().join('.')
}

export const forecastWeather = (list: IForecast3Hours[]) => {
  const dateArr = list.reduce((arr: string[], {dt_txt}) => {
    const date = dateToDayandMonth(dt_txt)

    const find = arr.find(item => item === date)
    if (!find) arr.push(date)
    return arr
  }, [])

  const outputArr: IElementsForecast1Day[] = dateArr.map(date => {
    const arr = list.reduce(
      (
        tempArr: IElementsForecast3Hour[],
        {dt_txt, main, pop, weather, wind},
      ) => {
        const tempDate = dateToDayandMonth(dt_txt)

        if (date === tempDate)
          tempArr.push({
            temp: main.temp,
            humidity: main.humidity,
            icon: weather[0].icon,
            pop,
            windSpeed: wind.speed,
            dt: time(dt_txt),
          })

        return tempArr
      },
      [],
    )

    return {
      date,
      list: arr,
    }
  })

  return outputArr
}
