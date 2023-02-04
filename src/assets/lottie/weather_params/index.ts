//для динамики, нельзя в require использовать динамику только статическую строку, из-за этого городить выбор отдельно
import {IImage} from '../../../utils/getDynamicImage'

export const arrImage: IImage[] = [
  {name: 'humidly', image: require('./humidly.json')},
  {name: 'air-pressure', image: require('./air-pressure.json')},

  {name: 'visibility', image: require('./visibility.json')},
  {name: 'wind', image: require('./wind.json')},
]
