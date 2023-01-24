//для динамики, нельзя в require использовать динамику только статическую строку, из-за этого городить выбор отдельно
import {IImage} from '../../utils/getDynamicImage'

export const arrImage: IImage[] = [
  {name: '01d', image: require('../../assets/weatherIcons/01d.png')},
  {name: '01n', image: require('../../assets/weatherIcons/01n.png')},

  {name: '02d', image: require('../../assets/weatherIcons/02d.png')},
  {name: '02n', image: require('../../assets/weatherIcons/02n.png')},

  {name: '03d', image: require('../../assets/weatherIcons/03d.png')},
  {name: '03n', image: require('../../assets/weatherIcons/03n.png')},

  {name: '04d', image: require('../../assets/weatherIcons/04d.png')},
  {name: '04n', image: require('../../assets/weatherIcons/04n.png')},

  {name: '09d', image: require('../../assets/weatherIcons/09d.png')},
  {name: '09n', image: require('../../assets/weatherIcons/09n.png')},

  {name: '10d', image: require('../../assets/weatherIcons/10d.png')},
  {name: '10n', image: require('../../assets/weatherIcons/10n.png')},

  {name: '11d', image: require('../../assets/weatherIcons/11d.png')},
  {name: '11n', image: require('../../assets/weatherIcons/11n.png')},

  {name: '13d', image: require('../../assets/weatherIcons/13d.png')},
  {name: '13n', image: require('../../assets/weatherIcons/13n.png')},

  {name: '50d', image: require('../../assets/weatherIcons/50d.png')},
  {name: '50n', image: require('../../assets/weatherIcons/50n.png')},
]
