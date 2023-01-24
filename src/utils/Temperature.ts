import {IElementsForecast3Hour} from '../types/weatherTypes'

export const minMaxTemp = (
  list: IElementsForecast3Hour[],
  option: 'min' | 'max',
) => {
  const arr = [...list]
  arr.sort((a, b) => (a.temp > b.temp ? 1 : -1))
  if (option === 'min') {
    return `${arr[0].temp}`
  } else {
    return `${arr[arr.length - 1].temp}`
  }
}
