import {IElementsForecast3Hour} from '../types/weatherTypes'

export const minMaxTemp = (
  list: IElementsForecast3Hour[],
  option: 'min' | 'max',
) => {
  const arr = [...list]
  arr.sort((a, b) => (a.temp > b.temp ? 1 : -1))
  if (option === 'min') {
    return `${Math.round(arr[0].temp)}`
  } else {
    return `${Math.round(arr[arr.length - 1].temp)}`
  }
}
