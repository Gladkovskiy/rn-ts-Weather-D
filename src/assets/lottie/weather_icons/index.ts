//для динамики, нельзя в require использовать динамику только статическую строку, из-за этого городить выбор отдельно
import {IImage} from '../../../utils/getDynamicImage'

export const arrImage: IImage[] = [
  {name: '01d', image: require('./01d.json')},
  {name: '01n', image: require('./01n.json')},

  {name: '02d', image: require('./02d.json')},
  {name: '02n', image: require('./02n.json')},

  {name: '03d', image: require('./03d.json')},
  {name: '03n', image: require('./03n.json')},

  {name: '04d', image: require('./04d.json')},
  {name: '04n', image: require('./04n.json')},

  {name: '09d', image: require('./09d.json')},
  {name: '09n', image: require('./09n.json')},

  {name: '10d', image: require('./10d.json')},
  {name: '10n', image: require('./10n.json')},

  {name: '11d', image: require('./11d.json')},
  {name: '11n', image: require('./11n.json')},

  {name: '13d', image: require('./13d.json')},
  {name: '13n', image: require('./13n.json')},

  {name: '50d', image: require('./50d.json')},
  {name: '50n', image: require('./50n.json')},
]
