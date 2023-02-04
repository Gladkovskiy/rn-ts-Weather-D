//для динамики, нельзя в require использовать динамику только статическую строку, из-за этого городить выбор отдельно
import {IImage} from '../../utils/getDynamicImage'

export const arrImage: IImage[] = [
  {name: '01d', image: require('./01d.png')},
  {name: '01n', image: require('./01n.png')},

  {name: '02d', image: require('./02d.png')},
  {name: '02n', image: require('./02n.png')},

  {name: '03d', image: require('./03d.png')},
  {name: '03n', image: require('./03n.png')},

  {name: '04d', image: require('./04d.png')},
  {name: '04n', image: require('./04n.png')},

  {name: '09d', image: require('./09d.png')},
  {name: '09n', image: require('./09n.png')},

  {name: '10d', image: require('./10d.png')},
  {name: '10n', image: require('./10n.png')},

  {name: '11d', image: require('./11d.png')},
  {name: '11n', image: require('./11n.png')},

  {name: '13d', image: require('./13d.png')},
  {name: '13n', image: require('./13n.png')},

  {name: '50d', image: require('./50d.png')},
  {name: '50n', image: require('./50n.png')},
]
