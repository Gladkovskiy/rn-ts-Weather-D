import axios from 'axios'
import {API_KEY} from '@env'

export const $weatherHost = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {appid: API_KEY},
})

export const $geocodingHost = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0/direct',
  params: {appid: API_KEY},
})
